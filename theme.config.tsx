import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>南科大资源页</span>,
  project: {
    link: 'https://github.com/suneao/sustech_page',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/suneao/sustech_page',
  footer: {
    text: 'I want to fuck this temple',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
}

export default config