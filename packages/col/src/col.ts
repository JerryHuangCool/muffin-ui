//自定义标签
import { defineComponent, h } from "vue"

export default defineComponent({
  name: 'MuffCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, ctx) {
      return ()=>h(props.tag,{},ctx.slots.default?.())//ts链式表达式 ctx.slots.default && ctx.slots.default()
  },
})