import React from 'react'
import { useLocation } from 'react-router-dom'
const ViewProfile = () => {
  const location = useLocation();
  // const alumniKey = location.state?.key; // Corrected prop name

  const thisAlumni=location.state?.all
  // console.log("state:",location.state)
  // console.log("thisAlumni in viewprofile:",thisAlumni)
  return (
    <div className='grid grid-cols-3'>
      <div className="col-span-1">
        <figure>
            <img src={thisAlumni.image} alt="alumni" />
        </figure>
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-3"></div>
    </div>
  )
}

export default ViewProfile
