<template>
  <div class="w">
    <Home v-if="$pagination" />
    <Content v-else />
  </div>

</template>
<script>
  import Home from '@theme/components/Home'
  export default {
    components: {
      Home,
    },
  }
</script>

