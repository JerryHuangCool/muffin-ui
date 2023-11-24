<template>
  <div class="muffin-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MuffButtonGroup'
})
</script>