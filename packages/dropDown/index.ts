import MuffDropdown from './src/dropDown.vue'
import {App} from 'vue'

MuffDropdown.install = (app:App)=>{

  
  app.component(MuffDropdown.name, MuffDropdown)
}

export default MuffDropdown