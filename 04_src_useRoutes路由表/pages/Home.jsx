import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  // 函数式组件使用state
  const [sum, setSum] = useState(1);

  return (
    <h3>我是Home的内容</h3>
  )
}
