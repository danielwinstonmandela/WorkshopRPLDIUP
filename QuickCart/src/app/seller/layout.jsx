'use client'
import Navbar from '@/src/components/seller/Navbar'
import Sidebar from '@/src/components/seller/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout