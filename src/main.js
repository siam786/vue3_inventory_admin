import './assets/main.css'
// Supports weights 100-900
import '@fontsource-variable/inter'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
