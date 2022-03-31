/** 该文件用于定义路由规则 */
import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

export default [
  // About组件
  {
    path: '/about',
    element: <About/>
  },
  // Home组件
  {
    path: '/home',
    element: <Home/>
  },
  // 重定向
  {
    path: '/',
    element: <Navigate to="/about"/>
  }
]