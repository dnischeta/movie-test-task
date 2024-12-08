export type Movie = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

export type MovieDetails = Movie & {
  trivia: string[]
  actors: Array<{
    name: string
    imdb_id: string
  }>
}
