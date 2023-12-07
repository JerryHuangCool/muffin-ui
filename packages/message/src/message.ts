import {messageOptions} from './message.type'
import MessageComponent from './messageComponent.vue'
import {createVNode, render} from 'vue'
let instance:any[] = []
let num = 0
export default function Message(options:messageOptions){
   console.log('22222')
   //ts类型保护
   if(typeof options === 'string'){
        options = {
            message:options
        }
   }
   let offset = options.offset || 20
   instance.forEach(item=>{
        offset += 60
   })
   const userClose = options.onclose
   const ops = {
        ...options,
        onclose:()=>{
            userClose && userClose()
        },
        offset
   }

   //渲染组件 createVNode,将组件变为一个虚拟dom
   //render()将vNode变成真实Dom，放到指定元素
   const vm = createVNode(MessageComponent, ops)
   //将其放到指定位置 body的儿子
   const container = document.createElement('div')
   vm.props!.onDestroy =()=>{
    render(null,container)
    num--
    if(num===0){
        instance=[]
    }
   }
   render(vm,container)
   //放到指定的位置
   document.body.appendChild(container.firstElementChild!)
   instance.push(vm)
   num++
}
