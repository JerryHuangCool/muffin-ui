import MuffRow from './src/row'
import {App} from 'vue'


MuffRow.install = (app:App)=>{

  app.component(MuffRow.name, MuffRow)
}

export default MuffRow