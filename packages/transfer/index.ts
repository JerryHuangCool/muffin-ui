import MuffTransfer from './src/transfer.vue'
import {App} from 'vue'


MuffTransfer.install = (app:App)=>{

  app.component(MuffTransfer.name, MuffTransfer)
}

export default MuffTransfer