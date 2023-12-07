type mtype = 'success' | 'info' | 'error' | 'warning'

export interface messageProps {
  id?:string,
  message?:string,
  type?:mtype,
  duration?:number,
  center?:boolean,
  onclose?:()=>void,
  offset?:number,
  html?:boolean
}

export type messageOptions =  messageProps | string