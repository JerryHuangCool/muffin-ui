import MuffCheckBox from './src/checkBox.vue'
import {App} from 'vue'

MuffCheckBox.install = (app:App)=>{

  
  app.component(MuffCheckBox.name, MuffCheckBox)
}

export default MuffCheckBox