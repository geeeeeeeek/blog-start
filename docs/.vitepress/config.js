import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tim技术博客',
  description: '分享跨境电商技术、Google SEO、AdSense 集成和程序员技术经验',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ==================== Google AdSense ====================
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
        crossorigin: 'anonymous'
      }
    ],
  ],

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/geeeeeeeek/' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: 'material-theme-palenight'
  },

  // 语言配置
  lang: 'zh-CN'
})
