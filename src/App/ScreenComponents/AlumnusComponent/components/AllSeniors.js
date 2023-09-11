import React from "react";
import { AlumniData } from "./AlumniData";
import SeniorBadge from "./SeniorBadge";

const AllSeniors = ({AlumniDataProps}) => {
  // console.log("AlumniDataProps:",AlumniDataProps)
  return (
    <div className='flex flex-wrap'>
      {(AlumniDataProps?AlumniDataProps:AlumniData).map((data) => {
        return (
          <SeniorBadge
            key={data.key}
            supabaseKey={data.key}
            image={data.image}
            name={data.name}
            passoutYear={data.passoutYear}
            designation={data.designation}
            all={data}
          />
        );
      })}
    </div>
  );
};

export default AllSeniors;
