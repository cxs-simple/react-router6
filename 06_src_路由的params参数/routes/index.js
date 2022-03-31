/** 该文件用于定义路由规则 */
import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default [
  // About组件
  {
    path: '/about',
    element: <About/>
  },
  // Home组件
  {
    path: '/home',
    element: <Home/>,
    // 定义子路由
    children: [
      {
        path: 'news',
        element: <News/>
      },
      {
        path: 'message',
        element: <Message/>,
        children: [
          {
            // 接收params方式传递的路由参数
            path: 'detail/:id/:title/:content',
            element: <Detail/>
          }
        ]
      }
    ]
  },
  // 重定向
  {
    path: '/',
    element: <Navigate to="/about"/>
  }
]