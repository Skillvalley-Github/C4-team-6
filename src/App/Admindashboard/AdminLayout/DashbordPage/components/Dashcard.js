import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";

const Dashcard = (props)=> {
  return (
    <>
    <div className='flex justify-between mx-6 md:mx-10 lg:mx-32 items-center'>
      <div className='flex space-x-6 items-center'>
      <img className='w-20 h-20 rounded-2xl' src={props.image} alt="" />
          <div className=''>
              <h1 className='font-7 md:text-2xl text-md'>{props.name}</h1>
              <p className='font-3 md:text-xl text-md'>{props.title}</p>
          </div>
      </div>
      <button className="col-span-1 view-more">
        <PiCirclesFourFill className=' text-4xl f-color-3' />
        <p className=' font-2 f-color-4'>more</p>
      </button>
    </div>
    </>
  )
}

export default Dashcard