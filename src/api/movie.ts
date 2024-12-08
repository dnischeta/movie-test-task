import type { MovieList, MovieDetails } from '@/types/movie'
import { request } from '@/utils/http'

const paths = {
  list: '/movie/list.json',
  details: () => '/movie/details.json',
}

export function getMovies() {
  return request<{ items: MovieList }>(paths.list)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getMovieDetails(id: number) {
  return request<MovieDetails>(paths.details())
}
