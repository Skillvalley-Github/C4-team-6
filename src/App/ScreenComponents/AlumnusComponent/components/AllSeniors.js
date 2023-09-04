import React from "react";
import { AlumniData } from "./AlumniData";
import SeniorBadge from "./SeniorBadge";

const AllSeniors = ({AlumniDataProps}) => {
  return (
    <div className='flex flex-wrap'>
      {(AlumniDataProps?AlumniDataProps:AlumniData).map((data) => {
        return (
          <SeniorBadge
            key={data.key}
            image={data.image}
            name={data.name}
            passoutYear={data.passoutYear}
          />
        );
      })}
    </div>
  );
};

export default AllSeniors;
