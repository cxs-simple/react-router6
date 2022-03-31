import React from 'react'
import {useParams} from 'react-router-dom'

export default function Detail() {
  // 使用useParams获取路由params方式传递的参数
  const {id, title, content} = useParams();

  return (
    <ul>
      <li>消息编号为：{id}</li>
      <li>消息标题为：{title}</li>
      <li>消息内容为：{content}</li>
    </ul>
  )
}
