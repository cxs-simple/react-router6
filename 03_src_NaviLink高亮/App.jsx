import React from 'react'
import {NavLink, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  // 定义高亮效果的函数
  function computedClassName({isActive}) {
    return isActive ? 'list-group-item test' : 'list-group-item'
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* 自定义路由高亮效果 */}
            <NavLink className={computedClassName} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
                <Routes>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
                  {/* 使用Navigate进行重定向 */}
                  <Route path='/' element={<Navigate to='/about'/>}></Route>
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
