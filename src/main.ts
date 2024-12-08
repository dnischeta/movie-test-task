import './assets/main.css'

import { createApp } from 'vue'
import { createCtx } from '@reatom/framework'
import { createReatomVue } from '@reatom/npm-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createReatomVue(createCtx()))

app.mount('#app')
