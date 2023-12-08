<template>
  <div class="dropdownMenu negative">
    <slot></slot>
  </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref, onMounted, onUpdated} from 'vue'
  export default defineComponent({
    name: 'MuffDropDownMenu',
    props: {
      menuHight: {
        type: Number
      }
    },
    setup(props){
      const height = ref('')
      function fn () {
        height.value = props.menuHight + 'px'
      }
      onMounted(() => {
        fn()
      })
      onUpdated(()=>{
        fn()
      })
      return {
        height
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .dropdownMenu{
    background-color: #fff;
    border: 1px solid rgb(235,238,245);
    border-radius: 6px;
    box-shadow: 2px 2px 3px rgba(224, 219, 219, 0.5);
    position: absolute;
    top: 45px;
    // bottom: -10px;
    left: 5px;
    overflow: hidden;
    padding: 5px 0;
    height: v-bind(height);
    transition: all .3s;
    color: rgb(109, 110, 112);
    z-index: 999;
  }
  .negative{
      height: 0px;
      opacity: 0;
      padding: 0;
      border: 0;
  }
  </style>