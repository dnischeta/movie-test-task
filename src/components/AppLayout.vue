<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div :class="$style.layout">
    <AppHeader :class="$style.header" />
    <main :class="$style.main">
      <slot />
    </main>
    <AppFooter :class="$style.footer" />
  </div>
</template>

<style module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.main {
  flex-grow: 1;
  padding: calc(var(--header-height) + 2rem) var(--content-padding) 2rem;
}
</style>
