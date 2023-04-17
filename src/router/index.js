import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '../views/Layout/index.vue'
// import Chat from '../views/chat.vue'
import Home from '../views/home.vue'
import Chat from '../views/gpt/index.vue'
import Manager from '../views/manager/index.vue'
import Comment from '../views/manager/component/comentList.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/gpt',
      component: Chat,
    },
    {
      path: '/manager',
      name: "manager",
      component: Manager,
      children:[
        {
          path: 'comment',
          component: Comment,
        },
      ]
    },
  ]
})

export default router
