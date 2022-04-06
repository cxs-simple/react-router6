import React, {useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'

export default function Message() {
  // 使用useNavigate返回一个函数用来实现编程式导航
  const navigate = useNavigate();

  const [messages] = useState([
    {id: '001', title: 'message001', content: 'test content 1'},
    {id: '002', title: 'message002', content: 'test content 2'},
    {id: '003', title: 'message003', content: 'test content 3'},
    {id: '004', title: 'message004', content: 'test content 4'}
  ])

  // 编程式路由导航
  function detail(item) {
    navigate('detail',{
      replace: false,
      state: {
        id: item.id,
        title: item.title,
        content: item.content
      }
    });
  }

  return (
    <div>
      <ul>
        {
          messages.map(item => {
            return (
              // 路由链接
              <li key={item.id}>
                {/* 路由传参 */}
                {/* state传参方式 */}
                <Link
                  to="detail" 
                  state={{ id: item.id,
                           title: item.title,
                           content: item.content }}>
                  {item.title}
                </Link>
                <button onClick={() => detail(item)}>点我看详情</button>
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
