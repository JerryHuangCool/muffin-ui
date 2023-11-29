<template>
    <div class="muffin-transfer">
        <MuffTransferItem :data="sourceData" :props="props"></MuffTransferItem>
            <div class="muffin-transfer__buttons">
                <MuffButton icon="muffin-icon-left"></MuffButton>
                <MuffButton icon="muffin-icon-right"></MuffButton>
            </div>
        <MuffTransferItem :data="targetData" :props="props"></MuffTransferItem>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import MuffTransferItem from './transferItem'
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
    setup (props) {
        //处理左右数据
        const {propsKey,sourceData,targetData} = useTransferData(props)
        return {
            propsKey,
            sourceData,
            targetData
        }
    }

})

</script>
