import {createRouter, createWebHashHistory} from 'vue-router'
import Button from '../components/button.vue'
import Layout from '../components/layout.vue'
import CheckBox from '../components/checkbox.vue'
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
  },
  {
    path: '/checkbox',
    name: 'CheckBox',
    component: CheckBox
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router