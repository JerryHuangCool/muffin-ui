import MuffButtonGroup from './src/button-group.vue'
import {App} from 'vue'


MuffButtonGroup.install = (app:App)=>{
  
  app.component(MuffButtonGroup.name, MuffButtonGroup)
}

export default MuffButtonGroup