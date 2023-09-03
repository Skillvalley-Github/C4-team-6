import React from 'react'

const GalleryCard = (props)=> {
  return (
    <>
    <div className=''>
      <div className='flex justify-center'>
         <div className='rounded-3xl bg-color-2'>
            <img className='w-[400px] h-[250px] rounded-2xl' src={props.image} alt="" />
            <p className='font-6 p-2'>{props.title}</p>
         </div>
      </div>
    </div>
    </>
  )
}

export default GalleryCard