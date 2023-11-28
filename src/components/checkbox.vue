<template>
  <div>
    <h2>单选框</h2>
    <MuffCheckBox v-model="checkValue" disabled ></MuffCheckBox>
    <MuffCheckBox v-model="checkValue" indeterminate  @change="handleChange" label="111"></MuffCheckBox>
    <MuffCheckBoxGroup v-model="checkList"  @change="handleChange">
      <MuffCheckBox v-for="(item, index) in showList" :label="item" :key="index"></MuffCheckBox>
    </MuffCheckBoxGroup>
  </div>
</template>
 


<script lang="ts" setup>
import { ref } from 'vue'

const checkValue = ref(true)
function handleChange(val) {
  console.log(val)
  
}
const checkList = ref(['1','2'])
const showList = ref(['1','2','3'])
</script>