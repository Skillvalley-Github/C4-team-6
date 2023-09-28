import React from 'react'
import Adminsidebar from '../../adminNave/Adminsidebar'
import MainstudentCard from './components/MainstudentCard'

const Studentlist = () => {
  return (
    <div className='grid md:flex '>
      <div>
          <Adminsidebar/>
      </div>
      <div className='bg-color-2 w-full'>
           <div className='mt-10'>
              <div className='flex justify-between md:mx-32 mx-10 text-2xl font-5'>
                <h1>All Students</h1>
                <h1>View All</h1>
              </div>
          </div>
          <MainstudentCard/>
      </div>
    </div>
  )
}

export default Studentlist