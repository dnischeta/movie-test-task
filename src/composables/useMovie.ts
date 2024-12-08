import { computed, watch, type Ref } from 'vue'
import { fetchMovieDetails } from '@/model/movie'
import { reatomRef, useCtx } from '@reatom/npm-vue'

export function useMovie(id: Ref<number>) {
  const ctx = useCtx()
  const movie = reatomRef(fetchMovieDetails.dataAtom)
  const statuses = reatomRef(fetchMovieDetails.statusesAtom)

  const isLoading = computed(() => statuses.value.isPending)
  const isError = computed(() => statuses.value.isRejected)

  watch(
    id,
    (newId) => {
      fetchMovieDetails(ctx, newId)
    },
    { immediate: true },
  )

  return {
    movie,
    isLoading,
    isError,
  }
}
