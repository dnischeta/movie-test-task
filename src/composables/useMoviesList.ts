import { reatomRef } from '@reatom/npm-vue'
import { computed } from 'vue'
import { fetchMovies } from '@/model/movie'

export function useMoviesList() {
  const movies = reatomRef(fetchMovies.dataAtom)
  const statuses = reatomRef(fetchMovies.statusesAtom)

  const isLoading = computed(() => statuses.value.isPending)
  const isError = computed(() => statuses.value.isRejected)

  return {
    movies,
    isLoading,
    isError,
  }
}
