<template>
  <div>
    <MuffButton @click="clickChange">显示message</MuffButton>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import Message from '../../packages/message'
export default defineComponent({
  setup() {
    function clickChange() {
      Message({
        message:'<span>1111</span>',
        html:true,
        type: 'success',
        onclose: function () {
          console.log(111)
          
        }
      })
      
    }
    return {
      clickChange
    }
  }
})

</script>