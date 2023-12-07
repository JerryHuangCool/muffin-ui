import {createRouter, createWebHashHistory} from 'vue-router'
import Button from '../components/button.vue'
import Layout from '../components/layout.vue'
import CheckBox from '../components/checkbox.vue'
import Transfer from '../components/transfer.vue'
import Message from '../components/message.vue'
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
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router