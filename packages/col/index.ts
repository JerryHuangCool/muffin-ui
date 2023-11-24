import MuffCol from './src/col'
import {App} from 'vue'


MuffCol.install = (app:App)=>{

  app.component(MuffCol.name, MuffCol)
}

export default MuffCol