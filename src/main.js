import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$asset = (path) => {
  if (!path) return ''
  const base = import.meta.env.BASE_URL || '/'
  return base + path.replace(/^\//, '')
}

app.use(router).mount('#app')
