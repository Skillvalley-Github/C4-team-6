import React from 'react'
// import { StudentData } from './StudentData';
import StudentCard from './StudentCard';

const StudentCluster = ({StudentDataProps}) => {
  return (
    <>
      <div className="flex flex-wrap">
      {StudentDataProps.map((data) => {
        return (
          <StudentCard
            key={data.id}
            {...data}
          />
        );
      })}
    </div>
    </>
  )
}

export default StudentCluster
