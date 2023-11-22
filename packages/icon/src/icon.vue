<template>
    <i :class="`muffin-icon-${name}`"></i>
</template>  

<script lang="ts">
import {defineComponent}from 'vue'

export default defineComponent({
  name: "MuffIcon",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(){}
})
</script>
