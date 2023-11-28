import {checkBoxProps, GroupProvide} from './checkBox.type'
import {computed, getCurrentInstance, inject} from 'vue'

function useModel(props:checkBoxProps) {//处理modelValue
  const {emit} = getCurrentInstance()
  const useProvide = inject<GroupProvide>('MuffCheckBoxGroup',{})
  const model = computed({
    get() {
      return useProvide.modelValue? useProvide.modelValue.value : props.modelValue
    },
    set(val) {
      if(useProvide.modelValue) {
        return useProvide.handleChange(val)
      }
      emit('update:modelValue', val)
    }
  })
  return model
}
function useChecked(props:checkBoxProps, model) {
  const isChecked = computed(() => {
    const value = model.value
    //数组是group
    if(Array.isArray(value)) {
      return value.includes(props.label)
    }else {
      return value
    }
  })
  return isChecked
}
function useEvent() {
  const {emit} = getCurrentInstance()
  function handelChange(e) {
    const target = e.target
    const value = target.isChecked? true: false
    emit('change',value)
  }
  return handelChange
}
export const useCheckBoxProps = (props:checkBoxProps)=>{
  //modelValue
  const model = useModel(props)
  const isChecked = useChecked(props,model)
  const handleChange = useEvent()
  return {
    model,
    isChecked,
    handleChange
  }
}