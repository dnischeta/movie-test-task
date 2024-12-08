<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMovie } from '@/composables/useMovie'
import UiTag from '@/components/ui/UiTag.vue'
import UiImg from '@/components/ui/UiImg.vue'
const route = useRoute()

const { movie, isLoading, isError } = useMovie(
  computed(() => parseInt(route.params.id as unknown as string)),
)
</script>

<template>
  <div v-if="!isLoading && !isError && movie" :class="$style.movie">
    <div :class="$style.sidebar">
      <h1>{{ movie.name }}</h1>
      <UiImg :class="$style.poster" :src="movie.poster" :alt="movie.name" />
      <div :class="$style.tags">
        <UiTag v-for="tag in movie.tags" :key="tag.text" v-bind="tag">{{ tag.text }}</UiTag>
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.scrollable">
        <h1>Description</h1>
        <p>{{ movie.description }}</p>
        <h1>Trivia</h1>
        <ul>
          <li v-for="item in movie.trivia" :key="item">{{ item }}</li>
        </ul>
        <h1>Actors</h1>
        <ul>
          <li v-for="actor in movie.actors" :key="actor.imdb_id">
            <a
              :class="$style.actor"
              :href="`https://www.imdb.com/name/${actor.imdb_id}`"
              target="_blank"
            >
              {{ actor.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style module>
.movie {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  height: auto;
  min-height: 100%;
}

.sidebar {
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content {
  position: relative;
  height: auto;
}

.scrollable {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0;
}

.poster {
  width: 100%;
  max-width: 236px;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.actor {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .movie {
    grid-template-columns: 236px 1fr;
    gap: 4rem;
  }

  .sidebar {
    position: sticky;
    top: 0;
  }

  .sidebar,
  .content {
    height: calc(100vh - 2 * var(--header-height) - 4rem);
  }

  .scrollable {
    position: absolute;
    padding-right: 1rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }
}
</style>
