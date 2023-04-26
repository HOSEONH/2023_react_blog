import React from 'react'
import { Link } from 'react-router-dom'
import ColorSchemesExample from './ColorSchemesExample'

export default function NavHeader() {
  return (
    <div>
        <Link to='/'>홈 </Link>
        <Link to='/boardlist'>게시판 </Link>
        <Link to='/loginform'>로그인 </Link>
        <ColorSchemesExample />
    </div>
  )
}
