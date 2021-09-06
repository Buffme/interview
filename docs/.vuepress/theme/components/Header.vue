<template>
  <header class="header">
    <div class="wrapper design-width">
      <h1 class="logo">
        <a href="https://github.com/Buffme"><img src="@theme/assets/logo.png" alt="Buffme"></a>
      </h1>

      <nav class="menu">
        <a
          v-for="nav in $themeConfig.navs"
          :key="nav.text"
          class="menu-item"
          :href="nav.link"
        >
          {{ nav.text }}
        </a>
      </nav>
    </div>
  </header>
</template>
