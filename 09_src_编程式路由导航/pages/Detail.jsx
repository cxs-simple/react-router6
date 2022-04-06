import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Detail() {
  // 从useLocation获取state方式传递的参数
  const {state: {id, title, content}} = useLocation();

  return (
    <ul>
      <li>消息编号为：{id}</li>
      <li>消息标题为：{title}</li>
      <li>消息内容为：{content}</li>
    </ul>
  )
}
