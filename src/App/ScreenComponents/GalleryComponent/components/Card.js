import React from 'react'
import GalleryCard from './GalleryCard'
import {gallerydata} from './data'
const Card = () => {

  return (
   <>
   <div className='grid md:grid-cols-2 lg:grid-cols-3 py-16 mx-10 gap-10'>
    {
        gallerydata.map((data)=>{
        return(
          <GalleryCard
          key={data.key}
          title={data.title}
          image={data.image}
          />
        )
      })
    }
   </div>
   </>
  )
}

export default Card