import React from 'react'
import logo from '../images/Vector.png'
import img1 from '../images/Group 1 2.png'
import img2 from '../images/Vector (2).png'
import img3 from '../images/Vector (3).png'
import { AiFillInfoCircle } from 'react-icons/ai';


function Dashboard() {
  return (
    <>
    <div className='bg-[#191516] text-[#FFF8E8] h-[100vh] w-[100%]'>
      <div className='flex justify-between mx-8 items-center'>
        <div className='text-center space-y-[-10px] mt-4'>
          <img className='w-20' src={logo} alt="" />
          <h1 className='text-[#FFF8E8]'>Reunify</h1>
        </div>
        <div>
          <AiFillInfoCircle className='text-4xl text-[#FFF8E8]' />
        </div>
      </div>
      <div className='space-y-[-90px]'>
        <div className='flex justify-center'>
          <div className='flex text-6xl md:text-[200px] font-familjen text-[#FFF8E8] font-bold antialiased leading-[304px]'>
             <h1>RE</h1>
              <div className='mt-24'>
                <img className='space-x-1 w-20 h-20 md:w-60 md:h-60' src={img1} alt="" />
              </div>
             <h1 className='ml-2'>NIFY</h1>
          </div>
        </div>
        <div className='flex justify-center text-center text-white leading-[24px] text-sm md:text-[20px] py-2 md:py-10'>
            <h1>crossover of generations - get mentorship, expand network <br/> and build your career</h1>
        </div>
      </div>
      <div className='grid md:flex justify-center md:space-x-16 text-white space-y-6 mt-20 md:mt-4'>
        <div className='flex space-x-12 border-dashed border-2 border-[#d3cdc0] rounded-full w-64 p-1'>
           <div className='ml-[-8px] mt-[-8px] absolute'>
              <img className='bg-[#f67e7d] rounded-full py-5 px-2' src={img2} alt="" />
           </div>
           <div className='px-10'>
              <p className='text-[#d3cdc0]'>Join us</p>
              <p className='text-2xl'>ALUMNI</p>
           </div>
        </div>
        <div className='flex space-x-12 border-dashed border-2 border-[#d3cdc0] rounded-full w-64'>
           <div className='ml-[-4px] mt-[-3px] absolute'>
              <img className='bg-[#f67e7d] rounded-full py-4 px-5' src={img3} alt="" />
           </div>
           <div className='px-10'>
              <p className='text-[#d3cdc0]'>Join us</p>
              <p className='text-2xl'>STUDENT</p>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard