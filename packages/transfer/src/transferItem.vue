<template>
  <div class="muffin-transfer__item">
    <MuffCheckBox label="全选/半选" ></MuffCheckBox>
    <div></div>
    <MuffCheckBoxGroup>
      <MuffCheckBox v-for="item in data" :key="item.key" :label="item.key" :disabled="item.disabled"></MuffCheckBox>
    </MuffCheckBoxGroup>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue'
import MuffCheckBox from '@muffin-ui/check-box'
import MuffCheckBoxGroup from '@muffin-ui/check-box-group'
import {Data, Props } from './transfer.type'
export default defineComponent({
  name: 'TransferItem',
  components: {
    MuffCheckBox,
    MuffCheckBoxGroup
  },
  props: {
    data: { 
      type:Array as PropType<Data[]>,
      default:()=>[]
    },
    props:{
      type: Object as PropType<Props>
    }
  },
  setup(props) {
    const state = ref({
      checked:[],
      allCheck:false
    })
  }
})

</script>
