import React from 'react'
import { Link } from "react-router-dom";
import logo1 from "../../Constants/logo.svg";

function Adminsidebar() {
  return (
    <div className='w-[300px] h-[100vh]'>
        <div className='flex-col justify-between f-color-2 mx-10 py-6'>
            <div className="grid space-y-10">
                <img src={logo1} className="h-[4rem] w-[4rem]" />
                <div className='grid space-y-10 font-3 text-2xl'>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/studentlist">Student list</Link>
                    <Link to="/alumnilist">Alumni list</Link>
                    <Link to="/Scheduleevent">Schedule event</Link>
                </div>
            </div>
            <div className='mt-[250px] font-3 text-2xl'>
                <Link to="/profile">Profile</Link>
            </div> 
        </div>
    </div>
  )
}

export default Adminsidebar