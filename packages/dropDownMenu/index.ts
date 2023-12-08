import MuffDropdownMenu from './src/dropDownMenu.vue'
import {App} from 'vue'

MuffDropdownMenu.install = (app:App)=>{

  
  app.component(MuffDropdownMenu.name, MuffDropdownMenu)
}

export default MuffDropdownMenu