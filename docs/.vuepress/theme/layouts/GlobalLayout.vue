<template>
  <div class="g-layout">
    <Header />
    <!-- <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    /> -->
    <!-- <DefaultGlobalLayout class="main" @click="isMobileHeaderOpen = false" /> -->
    <DefaultGlobalLayout class="main" />
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout'
  import Header from '@theme/components/Header'
  import MobileHeader from '@theme/components/MobileHeader'

  export default {
    components: {
      DefaultGlobalLayout: GlobalLayout,
      Header,
      MobileHeader,
    },

    data() {
      return {
        isMobileHeaderOpen: false,
      }
    },

    mounted() {
      this.$router.afterEach(() => {
        this.isMobileHeaderOpen = false
      })
    },
  }
</script>
