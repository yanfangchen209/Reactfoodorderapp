import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export const CommonHeader = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
export default CommonHeader;