const path = require('path')
let isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: isProd ? '/posts/' : '/',
  dest: './dist',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },

  // theme: '@vuepress/blog',
  themeConfig: {
    // logo: '/img/logo.png',
    navs: [
      { text: '首页', link: 'https://github.com/Buffme' },
    ],
  },

  // directories: [{
  //   id: 'post',
  //   dirname: 'posts',
  //   // layout: 'Home', // Layout component name for entry page.
  //   // itemLayout: 'Post', // Layout for matched pages.
  //   // frontmatter: {permalink: '/:regular'}, // Front matter for entry page.
  //   path: '/',
  //   lang: 'zh',
  // }],

  head: [
    // ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],

  title: '作点记录',
  description: '好记性不如烂笔头',
  // permalink: '/:slug', // 配置永久链接
  lang: 'zh',
  smoothScroll: true,
}
