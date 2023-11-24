import {createApp} from 'vue'
import App from './App.vue'
import MuffinUi from "muffin-ui"
import router from './router'
import  "theme-chalk/index.scss"
const app = createApp(App)
app.use(MuffinUi)
app.use(router)
app.mount("#app")