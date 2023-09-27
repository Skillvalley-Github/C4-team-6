import React from 'react'

function Createevnet() {
    return (
        <>
            <div className='flex justify-center'>
                <form>
                    <div className='grid justify-center bg-color-2 space-y-6 mt-10 w-[300px] md:w-[500px] py-10 font-2'>
                        <div>
                            <h1 className='text-center text-2xl font-bold'>Create Event</h1>
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className='w-[150px]'>Event Title</label>
                            <input
                                type="text"
                                placeholder="Enter Event Title"
                            />
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className='w-[150px]'>Event Date</label>
                            <input
                                type="date"
                                placeholder="Enter Event Date"
                            />
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                        <label className='w-[150px]'>Event banner</label>
                            <input className='border border-black p-2 w-[200px] bg-white' type="file"/>
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className='w-[150px]'>Event Description</label>
                            <textarea
                                className='h-[100px]'
                                placeholder="Enter Event Description"
                            />
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className='w-[150px]'>Event meetlink</label>
                            <input
                                type="url"
                                placeholder="Enter Event meetlink"
                            />
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className=' md:w-[150px]'>Event speaker Name</label>
                            <input
                                type="text"
                                placeholder="Enter speaker name"
                            />
                        </div>
                        <div className='grid md:flex md:space-x-4 items-center '>
                            <label className='w-[150px]'>Event speaker Image</label>
                            <input className='border border-black p-2 w-[200px] bg-white' type="file" />
                        </div>
                        <div className='flex justify-center'>
                            <input className='px-10 py-2 bg-color-4 rounded-2xl' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Createevnet