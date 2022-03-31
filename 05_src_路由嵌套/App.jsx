import React from 'react'
import {NavLink, useRoutes} from 'react-router-dom'
import routes from './routes'

export default function App() {
  // 根据路由表生成路由规则
  const element = useRoutes(routes);

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
            <NavLink className="list-group-item" to="/about">About</NavLink>
            {/*  默认情况下，当Home的子组件匹配成功，Home的导航也会高亮，
                 当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果。*/}
            <NavLink className="list-group-item" end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
