import React, { useEffect, useState } from "react";
import { AlumniData } from "./AlumniData";
import SpotLightCard from "./SpotLightCard";

const CarouselCard = ( {AlumniDataProps}) => {
  
  return (
    <div className="carousel carousel-center max-w-full pt-8 space-x-4">
      {(AlumniDataProps?AlumniDataProps:AlumniData).map((data) => {
        return (
          <SpotLightCard
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

export default CarouselCard;
