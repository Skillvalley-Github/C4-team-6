import React from 'react'
import Adminsidebar from '../../adminNave/Adminsidebar'
import Maincard from './components/Maincard'

const Dashboard = () => {
  return (
    <div className='grid md:flex '>
      <div>
          <Adminsidebar/>
      </div>
      <div className='bg-color-2 w-full'>
           <div className='grid md:flex gap-10 justify-between md:mx-10 lg:mx-32 mx-6 mt-20 f-color-2'>
              <div className='flex bg-color-4 w-[300px] h-[150px] rounded-2xl space-x-10'>
                <h1 className='font-7 mt-10 text-6xl'>100+</h1>
                <p className='text-2xl font-3 mt-[100px]'>Students</p>
              </div>
              <div className=' flex bg-color-4 w-[300px] h-[150px] rounded-2xl space-x-10'>
                <h1 className='font-7 mt-10 text-6xl'>100+</h1>
                <p className='text-2xl font-3 mt-[100px]'>Students</p>
              </div>
           </div>

           <div className='mt-10'>
              <div className='flex justify-between md:mx-32 mx-10 text-2xl font-5'>
                <h1>All Students</h1>
                <h1>View All</h1>
              </div>
          </div>
          <Maincard/>
      </div>
    </div>
  )
}

export default Dashboard