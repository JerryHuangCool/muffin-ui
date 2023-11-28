//组件整合
import MuffButton from "@muffin-ui/button"
import MuffIcon from "@muffin-ui/icon"
import MuffButtonGroup from "@muffin-ui/button-group"
import MuffCol from "@muffin-ui/col"
import MuffRow from "@muffin-ui/row"
import MuffCheckBox from "@muffin-ui/check-box"
import MuffCheckBoxGroup from "@muffin-ui/check-box-group"
import {App} from 'vue'
const components = [
  MuffButton,
  MuffIcon,
  MuffButtonGroup,
  MuffCol,
  MuffRow,
  MuffCheckBox,
  MuffCheckBoxGroup
]

const install = (app:App) => {
  components.forEach(component => {
    app.component(component.name,component)
  })
}

export default {
  install
}
