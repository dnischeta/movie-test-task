<script setup lang="ts">
import type { IconName, ColorName } from './constants'
import UiIcon from './UiIcon.vue'

withDefaults(
  defineProps<{
    icon?: IconName
    color?: ColorName
  }>(),
  {
    color: 'info',
  },
)
</script>

<template>
  <span :class="['text-sm', $style.tag, $style[color]]">
    <UiIcon v-if="icon" :name="icon" size="xs" />
    <slot />
  </span>
</template>

<style module>
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
}

.tag:has(svg) {
  padding: 0.125rem 0.375rem;
}

.success {
  background-color: var(--color-success);
}

.info {
  background-color: var(--color-info);
}

.accent {
  background-color: var(--color-accent);
}

.danger {
  background-color: var(--color-danger);
}
</style>
