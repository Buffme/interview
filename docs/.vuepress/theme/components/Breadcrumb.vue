<template>
  <div class="breadcrumb">
    <div class="wrapper design-width">
      <template v-for="(link, i) in links">
        <template v-if="i < links.length - 1">
          <RouterLink :to="link.route" :key="i" :title="link.title">{{ link.title }}</RouterLink>
          <i class="divide iconfont icon-arrow-right" />
        </template>
        <span v-else class="last">{{ pageTitle || link.title }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-breadcrumb',
  props: {
    pageTitle: String,
    links: Array
  },
  methods: {
    routeLinkClick(link) {
      this.$emit('routeClick', link)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .breadcrumb
    margin 0 auto 40px
    height 46px
    line-height @height
    color #fff
    font-size 14px
    color #161718
    background #fff
    .wrapper
      border-bottom 1px solid #161718
    a:hover
      text-decoration underline
    .divide
      margin 0 .3em 0 .2em
      display inline-block
      font-size 14px
      color #999
      transform scale(.7)
</style>
