//组件整合
import MuffButton from "@muffin-ui/button"
import MuffIcon from "@muffin-ui/icon"
import MuffButtonGroup from "@muffin-ui/button-group"
import MuffCol from "@muffin-ui/col"
import MuffRow from "@muffin-ui/row"
import {App} from 'vue'
const components = [
  MuffButton,
  MuffIcon,
  MuffButtonGroup,
  MuffCol,
  MuffRow
]

const install = (app:App) => {
  components.forEach(component => {
    app.component(component.name,component)
  })
}

export default {
  install
}
