<script setup lang="ts">
import type { IconName } from './constants'

withDefaults(defineProps<{ size?: 'xs' | 'md'; name: IconName }>(), { size: 'md' })
</script>

<template>
  <svg :class="['icon', `icon--size-${size}`]" :aria-label="`icon-${name}`">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}

.icon--size-xs {
  width: 0.5rem;
  height: 0.5rem;
}

.icon--size-md {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
