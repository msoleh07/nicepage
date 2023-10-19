import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

function Layout() {
  return (
    <div className='Layout_page'>
        <Header/>
        <main className="main_page">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout