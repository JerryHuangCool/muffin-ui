<template>
  <div>
    <h2>穿梭框</h2>
    <MuffTransfer :data="transferData" v-model="rightValue" :props="transferProps"></MuffTransfer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
  const generateData = () => {//数据源
  const data= []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
    return ref(data)
  }
  return {
    transferData: generateData(),
    rightValue: ref([1,4]),
    transferProps: {
      key: 'key',
      label: 'label',
      disabled: 'disabled'
    }
  }
}
})

</script>