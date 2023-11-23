<template>
  <button :class="classs">
    <i class="muffin-icon-jiazai" v-if="loading"></i>
    <i :class="icon" v-if="icon!='none' && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>  
<!-- bem规范  x-xx 名称
  __名称  局部    --sunccess 修饰
-->
<script lang="ts">
import {defineComponent, PropType, computed}from 'vue'
//Ts枚举
type buttonType = "primary" | "success" | "warining" | "danger" | "info" | "muffin" | "nuts"
//vue3组件传值类型 限制类型PropType
export default defineComponent({
  name: "MuffButton",
  props: {
    type: {
      type: String as PropType<buttonType>,
      //校验
      validator:(val:string)=>{
        return ["primary"  , "success" , "warining" , "danger" , "info" , "muffin" , "nuts"].includes(val)
      },
      default: 'primary'
    },
    icon: {
      type: String,
      default: 'none'
    },
    disabled: {
      type: Boolean
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx){
    console.log(props.type)
    const classs = computed(() => {
      return [
        'muffin-button',
        //动态的样式
        'muffin-button--' + props.type,
        //状态
        {
          'is-disabled': props.disabled,
          'is-plain': props.plain,
          'is-round': props.round,
          'is-circle': props.circle,
          'is-loading': props.loading
        }
      ]
    })
    return {
      classs
    }
  }
})
</script>