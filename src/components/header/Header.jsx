import React, { memo, useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {HiMiniBars4} from 'react-icons/hi2'
import Sidebar from '../sidebar/Sidebar'
import { useDispatch , useSelector } from 'react-redux'
import { OPEN_ALL_CART } from '../../app/openAllCatalog'

function Header() {
  
  const dispatch = useDispatch()
  const openSideBar = useSelector(s => s.openAllCatalog)

  // const [openSideBar , setOpenSideBar] = useState(false)
   openSideBar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  
  return (
    <header className='header_page'>
      {openSideBar && <Sidebar />}
      <div className="header_logo">
        <Link to={'/'}>Office Design Gallery</Link>
      </div>
      <Link className="header_logo_img_border">
        <div className="header_logo_img_item">
          <img src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" alt="" />
        </div>
        <h1>Office</h1>
      </Link>
      <div className="header_sidebar_bars">
        <button onClick={()=> dispatch(OPEN_ALL_CART())}><HiMiniBars4/></button>
      </div>
      <div className="header_links_border">
        <div className="header_links">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Servicess</Link>
          <Link>Contacts</Link>
        </div>
        <div className="header_login">
          <Link>Log in</Link>
          <Link>Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)