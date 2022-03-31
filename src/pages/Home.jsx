import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  // 函数式组件使用state
  const [sum, setSum] = useState(1);

  return (
    <div>
      <h3>我是Home的内容</h3>
      {/* 使用Navigate进行重定向 */}
      {sum === 2 ? <Navigate to='/about'/> : <h4>当前sum的值为{sum}</h4>}
      <button onClick={() => setSum(2)}>点我sum值变为2</button>
    </div>
  )
}
