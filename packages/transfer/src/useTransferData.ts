import {computed} from 'vue'

export const useTransferData = (props)=>{
  console.log(props)
  const propKey = computed(()=>props.props.key)
  const data = computed(()=>{
    return props.data.reduce((pre,next)=>{
      pre[next[propKey.value]] = next
      return pre
    },{})
    
  })
 const sourceData = computed(()=>{
  return props.data.filter(item=>!props.modelValue.includes(item[propKey.value]))
 })
 const targetData = computed(()=>{
  return props.data.filter(item=>props.modelValue.includes(item[propKey.value]))
 })
  return {
    sourceData,
    targetData,
    propKey
  }
}