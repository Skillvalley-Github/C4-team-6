import React from "react";
import Navbar from "./components/Navbar";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Card from "./components/Card";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="px-10 py-10 space-y-2">
          <h1 className="text-4xl md:text-5xl font-6 f-color-1">
            Reunion <span className="f-color-3">Gallery</span>
          </h1>
          <p className="text-md md:text-xl font-1 f-color-1">
            Upload your snaps after reuniting you get reunited
          </p>
        </div>

        <div className="md:flex justify-between px-10 space-y-8 md:space-y-0">
          <div className="flex space-x-5 items-center">
            <div className="p-3 bg-color-3 rounded-full">
              <BsPlus className="text-4xl" />
            </div>
            <p className="font-1  f-color-1">Upload image</p>
          </div>
          <div className="flex">
            <div className="absolute p-3 bg-color-3 rounded-full md:ml-[-10px]">
              <CiSearch className=" text-4xl " />
            </div>
            <input
              className="px-16 mt-2 md:mt-0 border-dashed border-2 rounded-full bg-color-4"
              type="text"
              placeholder="Search images by name"
            />
          </div>
        </div>

        <Card />
      </div>
    </>
  );
};

export default Gallery;
