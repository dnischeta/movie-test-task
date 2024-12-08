import { createRouter, createWebHashHistory } from 'vue-router'
import ListPage from '../pages/ListPage.vue'
import MoviePage from '../pages/MoviePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListPage,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MoviePage,
    },
  ],
})

export default router
