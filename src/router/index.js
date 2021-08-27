import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import sourceData from '@/data.json'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/thread/:id',
    component: ThreadShow,
    name: 'ThreadShow',
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id == to.params.id)
      if (threadExists) {
        return next()

      // if doesnt exists redirect to not found
      } else {
        next({
          name: "NotFound",
          params: {
            pathMatch: to.path.substring(1).split('/')
          },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter(
  {
    history: createWebHistory(),
    routes
  }
)