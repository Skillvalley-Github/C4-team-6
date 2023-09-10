import React from 'react'
import { Link } from "react-router-dom";
import logo1 from "../../Constants/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";

function Adminsidebar() {

  return (
    <div className='flex justify-between lg:w-[400px] lg:h-[100vh]'>
        <div className='flex-col justify-between f-color-2 mx-10 py-6'>
            <div className="grid space-y-10">
                <img src={logo1} className="h-[4rem] w-[4rem]" />
                <div className=' md:flex hidden'>
                    <div className='grid space-y-10 font-3 text-2xl'>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/studentlist">Student list</Link>
                        <Link to="/alumnilist">Alumni list</Link>
                        <Link to="/Scheduleevent">Schedule event</Link>
                    </div>
                </div>
            </div>
            <div className=' md:flex hidden mt-[250px] font-3 text-2xl'>
                <Link to="/profile">Profile</Link>
            </div>
        </div>

        <div
            className="visible md:hidden bg-color-4 mr-6 py-8"
            onClick={()=>window.my_modal_1.showModal()}
          >
            <HiMenuAlt3 className="f-color-3 text-3xl" />
        </div>
          <dialog
            id="my_modal_1" className="modal backdrop-blur-md"
          >
            <form method="dialog" className="modal-box bg-color-2 menu">
              <ul className="flex flex-col px-1 gap-4">
                <li className="px-3 py-2">
                  <Link to="/dashboard" className="text-hover font-4 text-lg">
                  Dashboard
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/studentlist" className="text-hover font-4 text-lg">
                  Student list
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/alumnilist" className="text-hover font-4 text-lg">
                  Alumni list
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/Scheduleevent" className="text-hover font-4 text-lg">
                  Schedule event
                  </Link>
                </li>
              </ul>
              <div className="modal-action">
                <button className="btn bg-color-4 f-color-3">X</button>
              </div>
            </form>
          </dialog>
    </div>
  )
}

export default Adminsidebar