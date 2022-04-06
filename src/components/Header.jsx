import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  
  // 后退的回调函数
  function back()  {
    navigate(-1);
  }

  // 前进的回调函数
  function forward() {
    navigate(1);
  }

  return (
    <div className="page-header">
      <h2>React Router Demo</h2>
      <button onClick={back}>⬅后退</button>
      <button onClick={forward}>前进➡</button>
    </div>
  )
}
