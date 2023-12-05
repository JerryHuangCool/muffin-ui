<template>
    <div class="muffin-transfer">
        <MuffTransferItem :data="sourceData" :props="props" @checkChange="sourceCheckChange"></MuffTransferItem>
            <div class="muffin-transfer__buttons">
                <MuffButton icon="muffin-icon-left" @click="leftClick" :disabled="checkState.rightState.length===0"></MuffButton>
                <MuffButton icon="muffin-icon-right" @click="rightClick" :disabled="checkState.leftState.length===0"></MuffButton>
            </div>
        <MuffTransferItem :data="targetData" :props="props" @checkChange="targetCheckChange"></MuffTransferItem>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue'
import MuffTransferItem from './transferItem.vue'
import MuffButton from '@muffin-ui/button'
import {TransferProps} from './transfer.type'
import {useTransferData} from './useTransferData'
export default defineComponent({
    name:'MuffTransfer',
    components: {
        MuffTransferItem,
        MuffButton
    },
    props: {
        data: {
            type: Array as PropType<TransferProps>
        },
        props: {
            type: Object
        },
        modelValue: {
            type:Array
        }
    },
    emits:['update:modelValue'],
    setup (props,{emit}) {
        //处理左右数据
        const {propKey,sourceData,targetData} = useTransferData(props)
        const checkState = ref({
            leftState:[],
            rightState:[]
        })
        function sourceCheckChange(leftVal) {
            checkState.value.leftState = leftVal
        }
        function targetCheckChange(rightVal) {
            checkState.value.rightState = rightVal
        }
        //实现穿梭
        function leftClick() {
            const currentValue = props.modelValue.slice(0)
            checkState.value.rightState.forEach(item => {
                const index = currentValue.indexOf(item)
                if(index>-1){
                    currentValue.splice(index,1)
                }
                emit('update:modelValue',currentValue)
            })
            checkState.value.rightState = []
        }
        function rightClick() {
            let currentValue = props.modelValue.slice(0)
           currentValue = currentValue.concat(checkState.value.leftState)
           emit('update:modelValue',currentValue)
           checkState.value.leftState = []
        }
        return {
            propKey,
            sourceData,
            targetData,
            sourceCheckChange,
            targetCheckChange,
            checkState,
            leftClick,
            rightClick
        }
    }

})

</script>
