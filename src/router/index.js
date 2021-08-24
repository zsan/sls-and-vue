import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
import sourceData from '@/data.json'
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
    component: PageNotFound
  }
]

export default createRouter(
  {
    history: createWebHistory(),
    routes
  }
)