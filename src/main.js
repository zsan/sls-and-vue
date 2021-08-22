import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: PageHome,
    name: 'Home'
  },
  {
    path: '/thread/:id',
    component: PageThreadShow,
    name: 'ThreadShow',
    props: true
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
