import type { Movie, MovieDetails } from '@/types/movie'
import { request } from '@/utils/http'

const paths = {
  list: '/movie/list.json',
  // TODO: replace with actual detail URL
  details: () => '/movie/details.json',
}

export function getMovies() {
  return request<{ items: Movie[] }>(paths.list)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getMovieDetails(id: number) {
  return request<MovieDetails>(paths.details())
}
