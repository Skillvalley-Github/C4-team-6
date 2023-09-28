import React from 'react'
import StudentListcard from './StudentListcard'
import {studentlistdata} from './data'
const MainstudentCard = () => {

  return (
   <>
   <div className='grid py-16 mx-2 gap-14'>
    {
       studentlistdata.map((data)=>{
        return(
          <StudentListcard
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

export default MainstudentCard