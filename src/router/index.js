import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter(
  {
    history: createWebHistory(),
    routes
  }
)