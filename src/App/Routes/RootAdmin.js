import React from 'react'
import { Outlet } from 'react-router-dom';
import Adminsidebar from '../Admindashboard/adminNave/Adminsidebar';

const RootAdmin = () => {
  return (
    <div>
      <Adminsidebar/>
      <Outlet />
    </div>
  )
}

export default RootAdmin
