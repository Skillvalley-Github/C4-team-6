import React from 'react'
import Dashcard from './Dashcard'
import {dashboarddata} from './data'
const Maincard = () => {

  return (
   <>
   <div className='grid py-16 mx-2 gap-14'>
    {
       dashboarddata.map((data)=>{
        return(
          <Dashcard
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

export default Maincard