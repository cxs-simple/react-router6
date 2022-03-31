import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div className="col-xs-6">
      <div className="panel">
        <div className="panel-body">
          <div>
            <h2>Home组件内容</h2>
            <div>
              <ul className="nav nav-tabs">
                <li>
                  <NavLink className="list-group-item" to="news">News</NavLink>
                </li>
                <li>
                  <NavLink className="list-group-item" to="message">Message</NavLink>
                </li>
              </ul>
            </div>
            {/* 当<Route>产生嵌套时，渲染其对应的后续子路由 */}
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}
