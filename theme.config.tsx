import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>南科大资源页</span>,
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
          :root {
            --nextra-primary-hue: 35deg;
          }

          /* Frosted glass navbar */
          .nextra-nav-container--sticky .nextra-nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: saturate(180%) blur(5px);
            -webkit-backdrop-filter: saturate(180%) blur(5px);
          }
          .dark .nextra-nav-container--sticky .nextra-nav {
            background: rgba(0, 0, 0, 0.7);
          }

          /* Glass ripple click effect */
          .ripple-effect {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            backdrop-filter: blur(2px) brightness(1.1);
            -webkit-backdrop-filter: blur(2px) brightness(1.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            animation: ripple-animation 0.7s ease-out forwards;
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
          
          /* Background Halos */
          .background-halos {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          .halo {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.15;
          }
          .dark .halo {
            opacity: 0.25;
          }

          .halo.one {
            width: 400px;
            height: 400px;
            background: #ffb446; /* Orange, matches theme */
            top: 10%;
            left: 20%;
            animation: move-halo 35s infinite alternate ease-in-out;
          }

          .halo.two {
            width: 500px;
            height: 500px;
            background: #46a9ff; /* Blue */
            bottom: 15%;
            right: 10%;
            animation: move-halo 40s infinite alternate ease-in-out;
            animation-delay: -7s;
          }

          .halo.three {
            width: 350px;
            height: 350px;
            background: #b446ff; /* Purple */
            top: 30%;
            right: 25%;
            animation: move-halo 30s infinite alternate ease-in-out;
            animation-delay: -14s;
          }

          @keyframes move-halo {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(150px, 80px) scale(1.2);
            }
            100% {
              transform: translate(-80px, -150px) scale(1);
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  if (typeof window === 'undefined') return;
  const container = document.createElement('div');
  container.className = 'background-halos';
  const halos = ['one', 'two', 'three'];
  halos.forEach(function(name) {
    const halo = document.createElement('div');
    halo.className = 'halo ' + name;
    container.appendChild(halo);
  });
  document.body.prepend(container);
})();
`
        }}
      />
    </>
  ),
}

export default config
