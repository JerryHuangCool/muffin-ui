<template>
  <transition name="muffin-message-fade" @before-leave="onclose" @after-leave="$emit('destroy')">
  <div class="muffin-message" v-show="show" :class="classs" :style="stylee" v-if="!html">
    {{message}}
  </div>
  <div class="muffin-message" v-show="show" :class="classs" :style="stylee" v-else v-html="message">
  </div>
</transition>
</template>

<script lang="ts">
import {defineComponent,onMounted,ref,onUnmounted,computed} from 'vue'
export default defineComponent({
  props:{
    id:{
      type:String,
      default:''
    },
    message: {
      type:String,
      default:''
    },
    type: {
      type:String,
      default: 'success'
    },
    duration:{
      type:Number,
      default:2000
    },
    center: {
      type:Boolean,
      default: true
    },
    offset: {
      type:Number,
      default:20
    },
    onclose: {
      type:Function
    },
    html: {
      type:Boolean,
      default:false
    }
  },
  setup(props){
    console.log(props)
    let show = ref(false)
    onMounted(() => {
      show.value = true
      timer()
    })
    onUnmounted(() => {
      clearTimeout(time)
    })
    let time
    function timer() {
      time = setTimeout(() => {
        show.value = false
      }, props.duration)
    }
    const classs = computed(()=>[
      'muffin-message--'+props.type,
      props.center?'is-center':''
    ])
    const stylee = computed(()=>({
      top:`${props.offset}px`
    }))
    return {
      show,
      classs,
      stylee 
    }
  }
 
})
</script>