<template>
  <div class="dropdownItem" @click="alertItem" :class="{divided: isDivided,disabled: isDisabled}">
      <slot></slot>
  </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref, onMounted} from 'vue'
  export default defineComponent({
    name: 'MuffDropDownItem',
    props: {
      command: {
        type: String
      },
      divided: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      }
    },
    setup(props){
      const isDivided = ref(false)
      const isDisabled = ref(false)
      function alertItem () {
        if (props.command) {
          alert(props.command)
        }
      }
      function handleDivided () {
        if (props.divided) {
          isDivided.value = true
        }
      }
      function handleDisabled () {
        if (props.disabled) {
          isDisabled.value = true
        }
      }
      onMounted(() => {
        handleDisabled()
        handleDivided()
      })
      return {
        isDivided,
        isDisabled,
        alertItem
       
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .dropdownItem{
      box-sizing: border-box;
      padding: 0 20px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      &:hover{
        background-color: rgb(236,245,255);
        color: rgb(102,177,255);
      }
  }
  .divided{
    border-top: 1.5px solid rgba(192, 192, 192, 0.719);
  }
  .disabled{
      color: rgba(127, 128, 131, 0.507);
      &:hover{
        background-color: #fff;
        color: rgba(127, 128, 131, 0.507);
        cursor: not-allowed;
      }
  }
  </style>