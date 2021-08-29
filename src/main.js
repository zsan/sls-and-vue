import { createApp } from 'vue'
import App from './App.vue'
import AppDate from '@/components/AppDate'
import router from '@/router'

const forumApp = createApp(App)
forumApp.component("AppDate", AppDate)
forumApp.use(router)

forumApp.mount('#app')
