import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import logo1 from '../Constants/logo.svg'
import logo2 from '../Constants/userDp.svg'

const Navbar = () => {

  const [display, setDisplay] = useState('hidden')
    const clickHandle = () => {
        if (display === 'hidden')
            setDisplay('flex');
        else
            setDisplay('hidden');
    }

  return (
    <>
      <div className='flex justify-between py-4 items-center mx-6 mr-6'>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div className='md:flex hidden justify-between font-4 f-color-2 items-center space-x-3 md:space-x-6'>
          <NavLink to="/alumnus">Alumnus</NavLink>
          <NavLink to="/all-webiner">Webinars</NavLink>
          <NavLink to="/careers" className='f-color-1'>Careers</NavLink>
          <NavLink to="/gallery" className='f-color-3'>Gallery</NavLink>
          <NavLink to="/discussion" className='f-color-1'>Discussion</NavLink>
          <img src={logo2} alt="" />
        </div>
        {display==='hidden'?   <GiHamburgerMenu className='text-3xl f-color-3 md:hidden block' onClick={clickHandle}/> : <MdOutlineClose      className='text-3xl md:hidden block f-color-3' onClick={clickHandle}/>}
      </div>
      {/* mobile view */}
      <div className={`md:hidden ${display} flex-col items-center z-10  py-20 gap-y-4 bg-black f-color-1 absolute w-full h-[60vh] md:mt-[500px]`}>
          <NavLink to="/alumnus">Alumnus</NavLink>
          <NavLink to="/all-webiner">Webinars</NavLink>
          <NavLink to="/careers" className='f-color-1'>Careers</NavLink>
          <NavLink to="/gallery" className='f-color-3'>Gallery</NavLink>
          <NavLink to="/discussion" className='f-color-1'>Discussion</NavLink>
          <img src={logo2} alt="" />
        </div>
    </>
  );
};

export default Navbar;
