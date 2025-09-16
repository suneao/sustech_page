import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
    text: <span>© 2025 - {new Date().getFullYear()} Gosesummer</span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: (
    <>
      <style>
        {`
          /* Custom selection color */
          ::selection {
            background: hsla(var(--nextra-primary-hue, 30), 100%, 50%, 0.3);
            color: inherit;
          }
          ::-moz-selection {
            background: hsla(var(--nextra-primary-hue, 30), 100%, 50%, 0.3);
            color: inherit;
          }
          .dark ::selection {
            background: hsla(var(--nextra-primary-hue, 30), 100%, 50%, 0.4);
          }
          .dark ::-moz-selection {
            background: hsla(var(--nextra-primary-hue, 30), 100%, 50%, 0.4);
          }

          /* --- MODIFIED & NEW STYLES --- */

          /* 1. Set Theme Color */
          :root {
            --nextra-primary-hue: 30deg; /* Richer Orange */
          }

          /* 2. Dynamic Background Glow */
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
            background: radial-gradient(circle at 10% 20%, hsla(var(--nextra-primary-hue), 80%, 70%, 0.4), transparent 30%),
                        radial-gradient(circle at 90% 80%, hsla(220, 80%, 80%, 0.4), transparent 35%);
            filter: blur(100px);
            animation: background-glow 25s linear infinite;
          }

          @keyframes background-glow {
            0% {
              transform: rotate(0deg) scale(1.1);
            }
            50% {
              transform: rotate(180deg) scale(1.0);
            }
            100% {
              transform: rotate(360deg) scale(1.1);
            }
          }

          .dark body::before {
             background: radial-gradient(circle at 10% 20%, hsla(var(--nextra-primary-hue), 80%, 60%, 0.5), transparent 30%),
                        radial-gradient(circle at 90% 80%, hsla(220, 80%, 70%, 0.5), transparent 35%);
          }

          /* 3. Element Glows */
          .nextra-nav > a:first-child:hover {
            filter: drop-shadow(0 0 8px hsla(var(--nextra-primary-hue), 100%, 60%, 0.6));
            transition: filter 0.3s ease;
          }
          .nextra-sidebar a.nx-text-primary-600 {
            filter: drop-shadow(0 0 6px hsla(var(--nextra-primary-hue), 100%, 60%, 0.5));
          }

          /* --- ORIGINAL STYLES (ADAPTED) --- */

          /* Frosted glass navbar */
          .nextra-nav-container--sticky .nextra-nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: saturate(180%) blur(5px);
            -webkit-backdrop-filter: saturate(180%) blur(5px);
          }
          .dark .nextra-nav-container--sticky .nextra-nav {
            background: rgba(0, 0, 0, 0.7);
          }

          /* Frosted glass dropdown menu */
          [data-radix-popper-content-wrapper] {
            background: rgba(255, 255, 255, 0.8) !important;
            backdrop-filter: saturate(180%) blur(5px) !important;
            -webkit-backdrop-filter: saturate(180%) blur(5px) !important;
          }

          .dark [data-radix-popper-content-wrapper] {
            background: rgba(0, 0, 0, 0.7) !important;
          }

          /* Glass ripple click effect */
          .ripple-effect {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: ripple-animation 0.7s ease-out forwards;
            backdrop-filter: blur(2px) brightness(0.95);
            -webkit-backdrop-filter: blur(2px) brightness(0.95);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          .dark .ripple-effect {
            backdrop-filter: blur(2px) brightness(1.1);
            -webkit-backdrop-filter: blur(2px) brightness(1.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          @keyframes ripple-animation {
            from {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            to {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
function createRipple(x, y) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple-effect';
  document.body.appendChild(ripple);
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  const size = 100;
  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';
  ripple.addEventListener('animationend', function() {
    ripple.remove();
  });
}

document.addEventListener('click', function(e) {
  if (e.target.closest('a, button')) return;
  createRipple(e.clientX, e.clientY);
});
`
        }}
      />
    </>
  ),
}

export default config
