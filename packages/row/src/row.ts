import { defineComponent, h } from "vue"

export default defineComponent({
  name: 'MuffRow',
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