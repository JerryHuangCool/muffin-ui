//自定义标签
import { defineComponent, h, computed, inject } from "vue"

export default defineComponent({
  name: 'MuffCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {//占据的列数
      type:Number,
      default:24
    },
    offset: {//左侧间隔的列数
      type: Number,
      default:0
    }
  },
  setup(props, ctx) {
      const gutter = inject('MuffRow',0)
      const classs = computed(()=>{
        const pops = ['span','offset'] as const
        let ret = []
        pops.forEach(item=>{
          const size = props[item]
          if(typeof size ==='number' && size > 0) {
            ret.push(`muffin-col-${item}-${size}`)
          }
        })
        return ['muffin-col', ...ret]
      })
      const styles = computed(() => {
        if(gutter) {
          return {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
          }
        }
        return {}
      })
      return ()=>h(props.tag,{
        class: classs.value,
        style: styles.value
      },ctx.slots.default?.())//ts链式表达式 ctx.slots.default && ctx.slots.default()
  },
})