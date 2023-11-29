export type key = string | number
export type Data = {
  key:key,
  label:string,
  disabled:boolean
}
export type Props = {
  key:string,
  label:string,
  disabled:string
}

export interface TransferProps{
  data:Data[],//数据源
  modelValue:key[],//右侧数据
  props:Props//别名

}