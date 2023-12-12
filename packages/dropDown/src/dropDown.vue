<template>
    <div :class="classs">
      <MuffButton v-if="splitButton" id="btn" :type="type" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown
        <transition name="fade">
          <div v-show="active">
              <slot :menuHight="menuHight" :type="type"></slot>
          </div>
        </transition>
        
      </MuffButton>
      <div v-if="!splitButton" class="text" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown<span>></span>
        <transition name="fade">
          <div v-show="active"><slot :menuHight="menuHight" :type="type"></slot></div>
        </transition>
      </div>
    </div>
    </template>
    
    <script lang="ts">
    import {defineComponent, ref, PropType, computed} from 'vue'
    import MuffButton from '../../button'
    type dropType = "primary" | "success" | "warining" | "danger" | "info" | "muffin" | "nuts"
    export default defineComponent({
    name: 'MuffDropdown',
    props: {
        activeType: {
            type: String,
            default: 'hover'
        },
        splitButton: {
            type: Boolean,
            default: false
        },
        type: {
            type: String as PropType<dropType>,
            //校验
            validator: (val: string) => {
                return ["primary", "success", "warining", "danger", "info", "muffin", "nuts"].includes(val);
            },
            default: 'primary'
        }
    },
    setup(props) {
        const active = ref(false)
        let timeID = null
        const menuHight = ref('')
        const classs = computed(() => {
            return [
                'muffin-dropdown',
                //动态的样式
                'muffin-dropdown--' + props.type,
            ];
        });
        function triggerClick() {
            let dropdownM = document.querySelector('.dropdownMenu');
            if (active.value === true) {
                dropdownM.classList.add('negative');
                active.value = !active.value;
            }
            else {
                dropdownM.classList.remove('negative');
                active.value = !active.value;
            }
        }
        function handleClick() {
            if (props.activeType === 'click') {
                triggerClick();
            }
        }
        function handleHoverA() {
            if (props.activeType === 'hover') {
                if (timeID !== null) {
                    return;
                }
                timeID = setTimeout(() => {
                    active.value = !active.value;
                    timeID = null;
                }, 150);
            }
        }
        function handleHoverN() {
            if (props.activeType === 'hover') {
                active.value = !active.value;
            }
        }
        return {
            active,
            timeID,
            menuHight,
            classs,
            handleClick,
            handleHoverA,
            handleHoverN
        };
    },
    components: { MuffButton }
})
    </script>
    
   