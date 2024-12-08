<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import UiTag from './UiTag.vue'
import UiImg from './UiImg.vue'
import type { ColorName, IconName } from './constants'

type Tag = { text: string; icon?: IconName; color?: ColorName }

defineProps<{
  name: string
  description: string
  poster: string
  to: RouteLocationRaw
  tags?: Tag[]
}>()
</script>

<template>
  <div :class="$style.substrate">
    <article :class="$style.card">
      <UiImg :class="$style.cover" :src="poster" :alt="`${name} cover`" />
      <h2 :class="$style.title">
        <router-link class="text-one-line" :class="$style.link" :to="to">
          {{ name }}
        </router-link>
      </h2>
      <p class="text-two-lines" :class="$style.description">{{ description }}</p>
      <div v-if="tags" :class="$style.tags">
        <UiTag v-for="tag in tags" :key="tag.text" :icon="tag.icon" :color="tag.color">
          {{ tag.text }}
        </UiTag>
      </div>
    </article>
  </div>
</template>

<style module>
.substrate {
  background-color: var(--color-accent);
  border-radius: 1rem;
}

.card {
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: inherit;
  background-color: var(--color-surface);
  transition: transform 300ms ease-out;
}

.card:has(.link:hover) {
  transform: translate(-0.625rem, -0.625rem);
}

.card:has(.link:focus-visible),
.card:has(.link:active) {
  outline: 0.1875rem solid var(--color-accent);
}

.cover {
  border-radius: 0.5rem;
  pointer-events: none;
  object-fit: cover;
  height: 172px;
}

.link {
  outline: none;
}

.link::after {
  position: absolute;
  inset: 0;
  content: '';
  z-index: -1;
}

.description {
  height: calc(var(--text-line-height) * 2);
  pointer-events: none;
}

.tags {
  pointer-events: none;
  display: flex;
  gap: 0.5rem;
}
</style>
