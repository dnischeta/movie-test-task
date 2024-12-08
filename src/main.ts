import './assets/css/main.css'

import { createApp } from 'vue'
import { createCtx } from '@reatom/framework'
import { createReatomVue } from '@reatom/npm-vue'
import App from './App.vue'
import router from './router'

fetch(`${import.meta.env.BASE_URL}/sprite.svg`)
  .then((res) => res.text())
  .then((sprite) => {
    document.querySelector('[data-sprite]')!.innerHTML = sprite
  })

const app = createApp(App)

app.use(router)
app.use(createReatomVue(createCtx()))

app.mount('#app')
