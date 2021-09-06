<template>
  <div class="page-post">
    <Breadcrumb class="bread" :links="breadcrumbs" />
    <article class="post-content design-width" itemscope itemtype="https://schema.org/BlogPosting">
      <h1 class="post-title" itemprop="name headline">{{ $frontmatter.title }}</h1>
      <Content class="post-body" itemprop="articleBody" />
    </article>
    <Toc />
  </div>
</template>

<script>
  import Breadcrumb from '@theme/components/Breadcrumb'
  import Toc from '@theme/components/Toc'
  export default {
    components: {
      Breadcrumb,
      Toc,
    },
    data() {
      return {
        breadcrumbs: [
          { route: '/', title: '返回' },
          { title: '' }
        ]
      }
    }
  }
</script>
