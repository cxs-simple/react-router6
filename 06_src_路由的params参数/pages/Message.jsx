import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id: '001', title: 'message001', content: 'test content 1'},
    {id: '002', title: 'message002', content: 'test content 2'},
    {id: '003', title: 'message003', content: 'test content 3'},
    {id: '004', title: 'message004', content: 'test content 4'}
  ])

  return (
    <div>
      <ul>
        {
          messages.map(item => {
            return (
              // 路由链接
              <li key={item.id}>
                {/* 路由传参 */}
                {/* params传参方式 */}
                <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <br/>
      <Outlet/>
    </div>
  )
}
