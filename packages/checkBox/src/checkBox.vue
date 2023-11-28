<template>
    <div class="muffin-checkbox">
        <span class="muffin-checkbox__input">
            <input type="checkbox" v-model="model"
                :indeterminate="indeterminate" 
                :disabled="disabled"
                :name="name"
                :checked="isChecked"
                :value="label"
                @change="handleChange"
            >
        </span>
        <span class="muffin-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useCheckBoxProps} from './useCheckBoxProps.ts'
export default defineComponent({
  name: 'MuffCheckBox',
  props: {
    indeterminate:Boolean,//半选
    checked:Boolean,
    name:String,
    disabled:Boolean,
    label:{
        type:[String,Number,Boolean],
        default: ''
    },
    modelValue:[String,Number,Boolean]//双向数据绑定

  },
  emits:['update:modelValue','change'],
  setup(props,ctx) {
   //双向数据绑定
    return {
        ...useCheckBoxProps(props)
    }
    
  }
})
</script>
