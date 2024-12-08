import { reatomAsync, withDataAtom, onConnect, withStatusesAtom } from '@reatom/framework'
import * as api from '@/api/movie'
import type { MovieDetails } from '@/types/movie'
import type { Movie } from '@/types/movie'
import type { ColorName, IconName } from '@/components/ui/constants'

export const fetchMovies = reatomAsync(async () => {
  const response = await api.getMovies()
  return response.items.map((movie) => ({
    ...movie,
    to: getMovieDetailsTo(movie),
    tags: getMovieTags(movie),
  }))
}, 'fetchMovies').pipe(withDataAtom([]), withStatusesAtom())

onConnect(fetchMovies.dataAtom, fetchMovies)

export const fetchMovieDetails = reatomAsync(async (ctx, id: number) => {
  const response = await api.getMovieDetails(id)
  return {
    ...response,
    to: getMovieDetailsTo(response),
    tags: getMovieTags(response),
    actors: response.actors,
    trivia: response.trivia,
  }
}, 'fetchMovieDetails').pipe(withDataAtom(), withStatusesAtom())

function getTagColor(rating: number) {
  if (rating >= 7) return 'success'
  if (rating >= 4) return 'info'
  return 'danger'
}

function getMovieTags(
  movie: Movie | MovieDetails,
): Array<{ text: string; icon: IconName; color: ColorName }> {
  return [
    { text: movie.rating.toFixed(1), icon: 'star', color: getTagColor(movie.rating) },
    { text: movie.genre, icon: 'film', color: 'info' },
    { text: movie.duration, icon: 'clock', color: 'accent' },
  ]
}

function getMovieDetailsTo(movie: Movie | MovieDetails) {
  return { name: 'movie', params: { id: movie.id } }
}
