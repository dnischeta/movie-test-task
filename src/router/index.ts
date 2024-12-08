import { createRouter, createWebHashHistory } from 'vue-router'
import ListPage from '../pages/ListPage.vue'
import MoviePage from '../pages/MoviePage.vue'

export const ROUTES = {
  list: 'list',
  movie: 'movie',
} as const

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.list,
      component: ListPage,
    },
    {
      path: '/movie/:id',
      name: ROUTES.movie,
      component: MoviePage,
    },
  ],
})

export default router
