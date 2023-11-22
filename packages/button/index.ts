import MuffButton from './src/button.vue'
import {App} from 'vue'
MuffButton.install = (app:App)=>{
  app.component(MuffButton.name, MuffButton)
}

export default MuffButton