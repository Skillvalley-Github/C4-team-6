import React from "react";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlCloudUpload } from "react-icons/sl";
import Card from "./components/Card";

const Gallery = () => {
  return (
    <>
      <div>
        <div className="px-10 py-10 space-y-2">
          <h1 className="text-4xl md:text-6xl font-6 f-color-1">
            Reunion <span className="f-color-3">Gallery</span>
          </h1>
          <p className="text-md md:text-xl font-1 f-color-1">
            Upload your snaps after reuniting you get reunited
          </p>
        </div>

        <div className="md:flex justify-between px-10 space-y-8 md:space-y-0">
          <div className="flex space-x-5 items-center" onClick={()=>window.my_modal_3.showModal()}>
            <div className="p-3 bg-color-3 rounded-full">
              <BsPlus className="text-4xl" />
            </div>
            <button className="font-1  f-color-1">Upload image</button>
            <dialog id="my_modal_3" className="modal bg-color-5">
              <form method="dialog" className="modal-box bg-color-2">
                <button className="btn btn-sm btn-circle btn-ghost    absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg font-8">Upload your memory</h3>
                <div className="mt-6 bg-color-7 rounded-3xl">
                  <div className="w-[400px] h-[360px]">
                    <div className="absolute mt-[150px] ml-[200px] f-color-3">
                      <SlCloudUpload className="text-[80px]"/>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-color-4 w-full f-color-1 p-3 rounded-xl font-6 ">UPLOAD</button>
                </div>
              </form>
            </dialog>
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
