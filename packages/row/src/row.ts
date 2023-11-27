import { defineComponent, h, computed, provide } from "vue"

export default defineComponent({
  name: 'MuffRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: { //栅格间距
      type:Number,
      default: 0

    },
    justify: { //位置
      type:String,
      default: 'start'
    },
    align: {
      type:String,
      default: ''
    }
  },
  setup(props, ctx) {
      const classs = computed(()=>[
        'muffin-row',
        props.justify !== 'start' ?  `is-justify-${props.justify}` : '',
        props.align  !== '' ?  `is-align-${props.align}` : ''
      ])
      provide ('MuffRow', props.gutter)
      //解决gutter首尾两部分的padding，和容器对齐
      const styles = computed(()=>{
        const ret = {
          marginLeft: '',
          marginRight: ''
        }
        if(props.gutter) {
          ret.marginLeft = -props.gutter / 2 + 'px'
          ret.marginRight = -props.gutter / 2 + 'px'
        }
        return ret
      })
      return ()=>h(props.tag,{
        class:classs.value,
        style: styles.value
      },ctx.slots.default?.())//ts链式表达式 ctx.slots.default && ctx.slots.default()
  },
})