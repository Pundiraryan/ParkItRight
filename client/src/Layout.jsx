import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Foot from './components/Foot'

const Layout = () => {
  return (
    <div className=' font-primary flex flex-col min-h-screen'>
      <Navbar/>
      <div className="mx-auto bg-white flex min-h-screen max-w-screen-xxl flex-col">
        <Outlet />
      </div>
      <Foot />
    </div>
  )
}

export default Layout
