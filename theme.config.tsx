import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

// Add this CSS to your global CSS file (e.g., styles/globals.css)
// :root {
//   --nextra-primary-hue: 25;
//   --nextra-primary-saturation: 100%;
// }

// Define color constants
const PRIMARY_HUE = 25; // Orange hue
const PRIMARY_SATURATION = 100;

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/icon.png" alt="Logo" width="24" height="24" style={{ marginRight: '0.5rem', borderRadius: '50%' }} />
      <span>南科大资源页</span>
    </div>
  ),
  project: {
    link: 'https://github.com/suneao/sustech_page',
  },
  chat: {
    link: 'https://afdian.com/a/Gosesummer',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/suneao/sustech_page',
  footer: {
    content: <span>2025 - {new Date().getFullYear()} Gosesummer</span>,
  },
    head: () => (
    <style>{`
      :root {
        --nextra-primary-hue: ${PRIMARY_HUE};
        --nextra-primary-saturation: ${PRIMARY_SATURATION}%;
      }

    /* Background glow effect */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: -1;
      background: radial-gradient(circle at 10% 20%, hsla(${PRIMARY_HUE}, ${PRIMARY_SATURATION}%, 70%, 0.4), transparent 30%),
                radial-gradient(circle at 90% 80%, hsla(220, 80%, 80%, 0.4), transparent 35%);
      filter: blur(100px);
      animation: background-glow 25s linear infinite;
    }
        /* Background glow effect */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: -1;
          background: radial-gradient(circle at 10% 20%, hsla(${PRIMARY_HUE}, ${PRIMARY_SATURATION}%, 70%, 0.4), transparent 30%),
                    radial-gradient(circle at 90% 80%, hsla(220, 80%, 80%, 0.4), transparent 35%);
          filter: blur(100px);
          animation: background-glow 25s linear infinite;
        }

        @keyframes background-glow {
          0% { transform: rotate(0deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1.0); }
          100% { transform: rotate(360deg) scale(1.1); }
        }

        .dark body::before {
          background: radial-gradient(circle at 10% 20%, hsla(${PRIMARY_HUE}, ${PRIMARY_SATURATION}%, 60%, 0.5), transparent 30%),
                    radial-gradient(circle at 90% 80%, hsla(220, 80%, 70%, 0.5), transparent 35%);
        }

        /* Navbar styles */
        .nextra-nav-container--sticky .nextra-nav {
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: saturate(180%) blur(12px) !important;
          -webkit-backdrop-filter: saturate(180%) blur(12px) !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
        
        .dark .nextra-nav-container--sticky .nextra-nav {
          background: rgba(0, 0, 0, 0.7) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        /* Dropdown menu styles */
        .nextra-nav-container [role="navigation"] > div > div[data-active="true"] > div,
        [role="menu"], 
        [role="menu"] > div,
        [role="menu"] > div > div {
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: saturate(180%) blur(20px) !important;
          -webkit-backdrop-filter: saturate(180%) blur(20px) !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1) !important;
        }
        
        .dark .nextra-nav-container [role="navigation"] > div > div[data-active="true"] > div,
        .dark [role="menu"],
        .dark [role="menu"] > div,
        .dark [role="menu"] > div > div {
          background: rgba(26, 26, 26, 0.8) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3) !important;
        }

        /* Sidebar styles */
        .nextra-sidebar {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: saturate(180%) blur(12px);
          -webkit-backdrop-filter: saturate(180%) blur(12px);
        }

        .dark .nextra-sidebar {
          background: rgba(0, 0, 0, 0.5);
        }

        .nextra-sidebar a {
          transition: all 0.2s ease;
          border-radius: 6px;
          margin: 2px 0;
          padding: 4px 8px;
        }
        
        .nextra-sidebar a:hover {
          background: rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .dark .nextra-sidebar a:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        /* Active sidebar item */
        .nextra-sidebar .active {
          background: hsla(${PRIMARY_HUE}, ${PRIMARY_SATURATION}%, 50%, 0.15) !important;
          color: hsl(${PRIMARY_HUE}, ${PRIMARY_SATURATION}%, 45%) !important;
          font-weight: 500;
        }

        .dark .nextra-sidebar .active {
          background: hsla(var(--nextra-primary-hue), var(--nextra-primary-saturation), 50%, 0.2) !important;
          color: hsl(var(--nextra-primary-hue), var(--nextra-primary-saturation), 65%) !important;
        }

        /* Click effect */
        .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }

      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `}</style>
  )
};

export default config
