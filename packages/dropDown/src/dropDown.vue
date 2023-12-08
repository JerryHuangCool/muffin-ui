<template>
    <div class="muffin-dropdown">
      <fl-button v-if="splitButton" id="btn" type="primary" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown
        <slot :menuHight="menuHight"></slot>
      </fl-button>
      <div v-if="!splitButton" class="text" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown<span>></span>
        <slot :menuHight="menuHight"></slot>
      </div>
    </div>
    </template>
    
    <script lang="ts">
    import {defineComponent, ref} from 'vue'
    export default defineComponent({
      name: 'MuffDropdown',
      props: {
        activeType: {
          type: String,
          default: 'hover'
        },
        splitButton: {
          type: Boolean,
          default: false
        }
      },
      setup(props) {
        const active = ref(false)
        let timeID = null
        const menuHight = ref('')
        function triggerClick () {
          let dropdownM = document.querySelector('.dropdownMenu')
          if (active.value === true) {
            dropdownM.classList.add('negative')
            active.value = !active.value
          } else {
            dropdownM.classList.remove('negative')
            active.value = !active.value
          }
        }
        function handleClick () {
          if (props.activeType === 'click') {
            triggerClick()
          }
        }
        function handleHoverA () {
          if (props.activeType === 'hover') {
            let dropdownM = document.querySelector('.dropdownMenu')
            if (timeID !== null) {
              return
            }
            timeID = setTimeout(() => {
              dropdownM.classList.remove('negative')
              timeID = null
            }, 150)
          }
        }
        function handleHoverN () {
          if (props.activeType === 'hover') {
            let dropdownM = document.querySelector('.dropdownMenu')
            if (timeID !== null) {
              clearTimeout(this.timeID)
            }
              timeID = setTimeout(() => {
              dropdownM.classList.add('negative')
              timeID = null
            }, 300)
          }
        }
        return {
          active,
          timeID,
          menuHight,
          handleClick,
          handleHoverA,
          handleHoverN
        }
      }
    })
    </script>
    
   