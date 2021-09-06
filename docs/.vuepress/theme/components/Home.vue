<template>
  <div class="home">
    <section class="m-posts" itemscope itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="m-post design-width"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />
        <div class="m-post-pic">
          <NavLink :link="page.path"><img v-if="page.frontmatter.picture" :src="$withBase(page.frontmatter.picture)" alt=""></NavLink>
        </div>
        <header class="m-post-title" itemprop="name headline">
          <NavLink :link="page.path" :title="page.title">{{ page.title }}</NavLink>
        </header>
        <client-only v-if="page.excerpt">
          <NavLink :link="page.path"><p class="m-post-summary" itemprop="description" v-html="page.excerpt" /></NavLink>
        </client-only>
        <p v-else class="m-post-summary" itemprop="description">
          <NavLink :link="page.path" :title="page.summary">{{ page.summary }}</NavLink>
        </p>
      </article>
    </section>

    <component v-if="$pagination.length > 1 && paginationComponent" class="design-width" :is="paginationComponent" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Pagination,
    SimplePagination,
  } from '@vuepress/plugin-blog/lib/client/components'

  export default {
    data() {
      return {
        paginationComponent: null,
      }
    },

    computed: {
      pages() {
        return this.$pagination.pages
      },
    },

    created() {
      this.paginationComponent = this.getPaginationComponent()
    },

    methods: {
      getPaginationComponent() {
        const n = THEME_PAGINATION_COMPONENT
        if (n === 'Pagination') {
          return Pagination
        }
        if (n === 'SimplePagination') {
          return SimplePagination
        }
        return Vue.component(n) || Pagination
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .m-posts
    padding-bottom 14px
  .m-post
    position relative
    padding-top 10px
    overflow hidden
    &::after
      content ''
      display block
      clear both
      position absolute
      bottom 0
      // left 224px
      left 0
      right 0
      height 1px
      background #f0f0f0
    &-pic
      float left
      margin-right 32px
      img
        display block
        width 192px
        height auto
        &:hover
          opacity .9
    &-title
      font-size 18px
      a
        color #161718
        transition all .2s
        &:hover
          text-decoration underline
    &-summary
      color #999
      font-size 14px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      margin-top 5px
      a
        color #999
        &:hover
          color #666
</style>
