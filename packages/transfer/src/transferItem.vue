<template>
  <div class="muffin-transfer__item">
    <MuffCheckBox label="全选/反选" @change="handleChange" v-model="allCheck" ></MuffCheckBox>
    <div class="muffin-transfer__body">
    <MuffCheckBoxGroup v-model="checked">
      <MuffCheckBox v-for="item in data" :key="item[keyProps]" :label="item[keyProps]" :disabled="item[disabledProps]"></MuffCheckBox>
    </MuffCheckBoxGroup>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRefs} from 'vue'
import MuffCheckBox from '@muffin-ui/check-box'
import MuffCheckBoxGroup from '@muffin-ui/check-box-group'
import {Data, Props } from './transfer.type'
import {useCheck} from './useCheck'
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
  emits:[
    'checkChange'
  ],
  setup(props) {
    const state = ref({
      checked:[],
      allCheck:false
    })
    let {labelProps,keyProps,disabledProps,handleChange} = useCheck(props, state.value)

    return {
      ...toRefs(state.value),
      labelProps,
      keyProps,
      disabledProps,
      handleChange
    }

  }
})

</script>
