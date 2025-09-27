import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';

declare global {
  interface Window {
    va?: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.va) {
        window.va('send', 'pageview');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="/_vercel/insights/script.js"
        data-api="/_vercel/insights/event"
        strategy="afterInteractive"
      />
    </>
  );
}
