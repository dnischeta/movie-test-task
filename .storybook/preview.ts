import type { Preview } from '@storybook/vue3'
import '../src/assets/main.css'
import { loadSprite } from './loadSprite'
import { setup } from '@storybook/vue3'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: {} }]
})

setup((app) => {
  app.use(router)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<story />',
      async mounted() {
        await router.isReady()
      },
    }),
  ],
}

loadSprite()

export default preview
