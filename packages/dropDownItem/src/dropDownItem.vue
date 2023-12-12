<template>
  <div  @click="alertItem" :class="[{divided: isDivided,disabled: isDisabled},classs[0],classs[1]]">
      <slot></slot>
  </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref, onMounted, PropType, computed} from 'vue'
  type dropType = "primary" | "success" | "warining" | "danger" | "info" | "muffin" | "nuts"
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
      },
      type: {
        type: String as PropType<dropType>,
            //校验
            validator: (val: string) => {
                return ["primary", "success", "warining", "danger", "info", "muffin", "nuts"].includes(val);
            },
            default: 'primary'
      }
    },
    setup(props){
      const classs = computed(() => {
            return [
                'muffin-dropdownItem',
                //动态的样式
                'muffin-dropdownItem--' + props.type,
            ];
        });
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
        alertItem,
        classs
       
      }
    }
  })
  </script>
  