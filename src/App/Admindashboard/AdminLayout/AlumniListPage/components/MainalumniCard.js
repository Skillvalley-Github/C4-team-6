import React from 'react'
import Alimnicard from './Alimnicard'
import {alumnilistdata} from './data'
const MainalumniCard = () => {

  return (
   <>
   <div className='grid py-16 mx-2 gap-14'>
    {
       alumnilistdata.map((data)=>{
        return(
          <Alimnicard
          key={data.key} 
          title={data.title}
          name={data.name}
          image={data.image}
          />
        )
      })
    }
   </div>
   </>
  )
}

export default MainalumniCard