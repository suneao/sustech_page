import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

// This is the recommended way to add Vercel Analytics in Next.js 14
function VercelAnalytics() {
  return (
    <Script
      src="/_vercel/insights/script.js"
      data-api="/_vercel/insights/event"
      strategy="afterInteractive"
    />
  );
}

declare global {
  interface Window {
    va?: (event: string, options?: any) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.va) {
        window.va('pageview', { url });
      }
    };

    // Handle initial page load
    handleRouteChange(window.location.pathname + window.location.search);
    
    // Handle subsequent route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <VercelAnalytics />
    </>
  );
}
