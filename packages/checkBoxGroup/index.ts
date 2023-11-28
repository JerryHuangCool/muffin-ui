import MuffCheckBoxGroup from './src/checkBoxGroup.vue'
import {App} from 'vue'

MuffCheckBoxGroup .install = (app:App)=>{
  
  app.component(MuffCheckBoxGroup .name, MuffCheckBoxGroup )
}

export default MuffCheckBoxGroup 