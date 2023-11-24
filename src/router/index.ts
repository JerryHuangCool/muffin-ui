import {createRouter, createWebHashHistory} from 'vue-router'
import Button from '../components/button.vue'
import Layout from '../components/layout.vue'
const routes = [
  {
    path:'/',
    name: 'Button',
    component: Button
  },
  {
    path:'/layout',
    name: 'Layout',
    component: Layout
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router