import {ComputedRef} from 'vue'

export interface checkBoxProps {
  indeterminate?:boolean,//半选
  checked?:boolean,
  name?:string,
  disabled?:boolean,
  label?:string|number|boolean|object,
  modelValue?:string|number|boolean
}

export interface GroupProvide {
  modelValue?:ComputedRef,
  handleChange?:(val:unknown)=>void
}