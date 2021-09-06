// const path = require('path')
const removeMd = require('remove-markdown')
const pick = require('lodash/pick')

module.exports = themeConfig => {
  // 主题配置
  themeConfig = {
    navs: [
      {text: '首页', link: '/'},
      {text: '标签', link: '/tag/'},
    ],
    summary: true,
    summaryLength: 200,
    directories: [{
      id: 'post',
      dirname: 'posts',
      path: '/',
    }],
    // frontmatters: [{
    //   id: 'tag',
    //   keys: ['tags'],
    //   path: '/tag/',
    // }],
    globalPagination: {
      lengthPerPage: 20,
    },
    ...themeConfig,
  }

  // 博客插件配置
  const properties = [
    'directories',
    'frontmatters',
    'globalPagination',
  ]
  const blogPluginOptions = pick(themeConfig, properties)

  return {
    plugins: [
      '@vuepress/plugin-nprogress',
      ['@vuepress/blog', blogPluginOptions],
      ['smooth-scroll', !!themeConfig.smoothScroll],
    ],

    define: {
      THEME_PAGINATION_COMPONENT: themeConfig.paginationComponent || 'Pagination',
    },

    // alias: {
    //   fonts: path.resolve(__dirname, 'fonts'),
    // },

    // 生成摘要
    extendPageData($page) {
      // $page.frontmatter.picture = $page.frontmatter.picture || themeConfig.permalink
      console.log('extendPageData', $page)
      const strippedContent = $page._strippedContent || ''
      if (!strippedContent) return
      if ($page.frontmatter.picture) {
        $page.picture = $page.frontmatter.picture
      }
      if (themeConfig.summary) {
        $page.summary = $page.frontmatter.summary ||
          removeMd(
            strippedContent
              .trim()
              .replace(/^#+\s+(.*)/, '')
              .slice(0, themeConfig.summaryLength)
          ) + ' ...'
      }
      $page.frontmatter.description = $page.frontmatter.description || $page.summary
    },
  }
}
