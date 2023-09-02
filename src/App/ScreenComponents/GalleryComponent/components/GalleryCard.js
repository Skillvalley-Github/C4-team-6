import React from 'react'

const GalleryCard = (props)=> {
  return (
    <>
    <div  className='w-[350px] lg:w-[450px] h-[300px] rounded-3xl shadow-lg bg-color-2'>
        <div>
           <p className='mt-[250px] font-5 ml-10'>{props.title}</p>
        </div>
    </div>
    </>
  )
}

export default GalleryCard