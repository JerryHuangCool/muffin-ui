<template>
    <div class="muffin-checkboxGroup">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'

export default defineComponent({
  name: 'MuffCheckBoxGroup',
  props: {
    modelValue:Array
  },
  emits:['update:modelValue', 'change'],
  setup(props,{emit}) {
    let modelValue = computed(()=>{
        return props.modelValue
    })
    function handleChange(val) {
        emit('update:modelValue',val)
        emit('change',val)
    }
    provide('MuffCheckBoxGroup', {
        modelValue,
        handleChange
    })
  }
})
</script>

