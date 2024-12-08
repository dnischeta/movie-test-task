<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string
    alt?: string
  }>(),
  {
    src: `${import.meta.env.BASE_URL}/cover-placeholder.jpeg`,
  },
)

function onImgError(e: Event) {
  if (e.target && e.target instanceof HTMLImageElement) {
    e.target.src = `${import.meta.env.BASE_URL}/cover-placeholder.jpeg`
  }
}
</script>

<template>
  <img :src="src" :alt="alt" @error="onImgError" />
</template>

<style module>
.img {
  border-radius: 0.5rem;
}
</style>
