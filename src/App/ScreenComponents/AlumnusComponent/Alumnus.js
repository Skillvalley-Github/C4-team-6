import React from "react";
import CarouselCard from "./components/CarouselCard";
import { CiSearch } from "react-icons/ci";

const Alumnus = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-6 py-8">
        <div className="col-span-1">
          <h1 className="text-4xl md:text-6xl font-6 f-color-1">
            Meet our <span className="f-color-3">Stars</span>
          </h1>
          <p className="text-sm md:text-lg font-1 f-color-1">
            Spotlight alumnis of our campus
          </p>
        </div>
        <div className="container md:col-span-1">
          <CarouselCard />
        </div>
        <div className="container md:col-span-1 flex justify-center align-middle py-20">
          <div className="flex">
            <div className="absolute p-3 bg-color-3 rounded-full mt-2 md:mt-0 md:ml-[-10px]">
              <CiSearch className="text-4xl md:text-3xl" />
            </div>
            <input
              type="text"
              className="px-16 py-4 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full bg-color-4"
              placeholder="Search seniors from feed"
            />
          </div>
        </div>
        <div className="col-span-1">
          
        </div>
      </div>
    </>
  );
};

export default Alumnus;
