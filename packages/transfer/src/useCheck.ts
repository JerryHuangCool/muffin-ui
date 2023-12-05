import {computed, watch,getCurrentInstance} from 'vue'
import {State} from './transfer.type'

export const useCheck = (props,state:State) =>{
  const {emit} = getCurrentInstance()
  //变成响应式
  const labelProps = computed(()=>props.props.label)
  const keyProps = computed(()=>props.props.key)
  const disabledProps = computed(()=>props.props.disabled)
  //全选和反选
  const checkDisabled = computed(()=>{
    return props.data.filter(item=>!item[disabledProps.value])
  })
  const handleChange = (val)=>{
    state.allCheck = val
    state.checked = val? checkDisabled.value.map(item=>{
      return item[keyProps.value]
    }) : []
  }
  watch(()=>state.checked,()=>{
   const checks =  checkDisabled.value.map(item=>item[keyProps.value])
   state.allCheck = checks.length > 0 && checks.every(item=> state.checked.includes(item))
   emit("checkChange",state.checked)
  })
  watch(()=>props.data,()=>{
    state.allCheck = false
    state.checked = []
  })
  //实现穿梭

  return {
    labelProps,
    keyProps,
    disabledProps,
    handleChange
  }
}