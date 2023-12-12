<template>
  <div class="muffin-dropdownMenu">
    <slot></slot>
  </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref, onMounted, onUpdated} from 'vue'
  export default defineComponent({
    name: 'MuffDropDownMenu',
    props: {
      menuHight: {
        type: String
      },

    },
    setup(props){
      const height = ref('')
      console.log(props);
      
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
  
