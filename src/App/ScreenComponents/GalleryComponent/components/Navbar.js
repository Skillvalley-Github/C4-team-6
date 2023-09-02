import {useState } from 'react'
import logo1 from '../image/Vector (4).png'
import logo2 from '../image/Rectangle 19.png'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'

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
      <div className='flex justify-between py-4 mx-6 items-center '>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div className='md:flex hidden justify-between font-4 f-color-2 items-center space-x-3 md:space-x-6'>
          <NavLink to="/alumnus">Alumnus</NavLink>
          <NavLink to="/webinars">Webinars</NavLink>
          <NavLink to="/careers" className='f-color-1'>Careers</NavLink>
          <NavLink to="/gallery" className='f-color-3'>Gallery</NavLink>
          <NavLink to="/discussion" className='f-color-1'>Discussion</NavLink>
          <img src={logo2} alt="" />
        </div>
        {display==='hidden'?   <GiHamburgerMenu className='text-3xl f-color-3 md:hidden block' onClick={clickHandle}/> : <MdOutlineClose      className='text-3xl md:hidden block f-color-3' onClick={clickHandle}/>}
    
        {/* mobile view */}
        <div className={`md:hidden ${display} flex-col items-center z-10  py-20 gap-y-4 bg-black f-color-1 absolute w-full h-[60vh] mt-[550px] md:mt-[500px]`}>
          <NavLink to="/alumnus">Alumnus</NavLink>
          <NavLink to="/webinars">Webinars</NavLink>
          <NavLink to="/careers" className='f-color-1'>Careers</NavLink>
          <NavLink to="/gallery" className='f-color-3'>Gallery</NavLink>
          <NavLink to="/discussion" className='f-color-1'>Discussion</NavLink>
          <img src={logo2} alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar
