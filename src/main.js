import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/trulo.css'

createApp(App)
  .use(router)
  .mount('#app')
