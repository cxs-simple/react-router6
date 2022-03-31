import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Detail() {
  // 从useSearchParams获取search方式传递的参数
  const [search, setSearch] = useSearchParams();
  const id = search.get('id');
  const title = search.get('title');
  const content = search.get('content');

  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=005&title=hh&content=xixi')}>点我更新search传递来的参数</button>
      </li>
      <li>消息编号为：{id}</li>
      <li>消息标题为：{title}</li>
      <li>消息内容为：{content}</li>
    </ul>
  )
}
