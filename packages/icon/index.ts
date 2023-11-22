import MuffIcon from './src/icon.vue'
import {App} from 'vue'
MuffIcon.install = (app:App)=>{
  app.component(MuffIcon.name, MuffIcon)
}

export default MuffIcon