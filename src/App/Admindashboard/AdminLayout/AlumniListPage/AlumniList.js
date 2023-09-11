import React from 'react'
import Adminsidebar from '../../adminNave/Adminsidebar'
import Maincard from '../DashbordPage/components/Maincard'

const AlumniList = () => {
  return (
    <div className='grid md:flex '>
      <div>
          <Adminsidebar/>
      </div>
      <div className='bg-color-2 w-full'>
           <div className='mt-10'>
              <div className='flex  md:mx-32 mx-10 text-2xl font-5'>
                <h1>All alumnis</h1>
              </div>
          </div>
          <Maincard/>
      </div>
    </div>
  )
}

export default AlumniList