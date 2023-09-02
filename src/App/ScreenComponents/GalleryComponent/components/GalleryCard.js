import React from 'react'

const GalleryCard = (props)=> {
  return (
    <>
    <div className='w-[450px] h-[300px] bg-color-2 rounded-2xl'>
      <div className='flex justify-center'>
         <div className=''>
            <img className='w-[450px] h-[250px]' src={props.image} alt="" />
            <p className='font-6 p-2'>{props.title}</p>
         </div>
      </div>
    </div>
    </>
  )
}

export default GalleryCard