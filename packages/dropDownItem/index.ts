import MuffDropDownItem from './src/dropDownItem.vue'
import {App} from 'vue'

MuffDropDownItem.install = (app:App)=>{

  
  app.component(MuffDropDownItem.name, MuffDropDownItem)
}

export default MuffDropDownItem