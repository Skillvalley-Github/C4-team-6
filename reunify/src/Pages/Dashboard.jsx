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
          <div className='flex text-[200px] font-familjen text-  [#FFF8E8] font-bold antialiased leading-[304px]'>
             <h1>RE</h1>
             <img className='mb-[80px] space-x-1' src={img1} alt="" />
             <h1 className='ml-2'>NIFY</h1>
          </div>
        </div>
        <div className='flex justify-center text-center text-white leading-[24px] text-[20px] py-10'>
            <h1>crossover of generations - get mentorship, expand network <br/> and build your career</h1>
        </div>
      </div>
      <div className='flex justify-center space-x-16 text-white'>
        <div className='flex space-x-12 border-dashed border-2 border-[#fff8e8] rounded-full w-64'>
           <img className='bg-[#f67e7d] rounded-full py-4' src={img2} alt="" />
           <p>join us <br/> <span className='text-2xl'>ALUMNI</span> </p>
        </div>
        <div className='flex space-x-12 border-dashed border-2 border-[#fff8e8] rounded-full w-64'>
           <img className='bg-[#f67e7d] rounded-full py-4 px-5' src={img3} alt="" />
           <p>join us <br/> <span className='text-2xl'>STUDENT</span> </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard