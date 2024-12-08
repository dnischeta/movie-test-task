<script setup lang="ts">
import { useMoviesList } from '@/composables/useMoviesList'
import UiCard from '@/components/ui/UiCard.vue'

const { movies, isLoading, isError } = useMoviesList()
</script>

<template>
  <div v-if="!isLoading && !isError" :class="$style.list">
    <UiCard v-for="movie in movies" :key="movie.id" v-bind="movie" />
  </div>
</template>

<style module>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 268px), 1fr));
  gap: 1rem;
}
</style>
