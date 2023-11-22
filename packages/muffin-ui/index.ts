//组件整合
import MuffButton from "@muffin-ui/button"
import MuffIcon from "@muffin-ui/icon"
import {App} from 'vue'
const components = [
  MuffButton,
  MuffIcon
]

const install = (app:App) => {
  components.forEach(component => {
    app.component(component.name,component)
  })
}

export default {
  install
}
