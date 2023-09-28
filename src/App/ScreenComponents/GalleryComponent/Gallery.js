import React from "react";
import "../../../AppStyles/gallery.css";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlCloudUpload } from "react-icons/sl";
import Card from "./components/Card";

const Gallery = () => {
  return (
    <>
      <div>
        <div className="px-6 pb-8 pt-24 space-y-2">
          <h1 className="text-4xl md:text-6xl font-6 f-color-1">
            Reunion <span className="f-color-3">Gallery</span>
          </h1>
          <p className="text-md md:text-xl font-1 f-color-1">
            Upload your snaps after reuniting you get reunited
          </p>
        </div>

        <div className="md:flex justify-between px-10 space-y-8 md:space-y-0">
          <div
            className="flex items-center"
            onClick={() => window.my_modal_3.showModal()}
          >
            <div className="p-3 bg-color-3 rounded-full">
              <BsPlus className="text-4xl" />
            </div>
            <button className="font-1 f-color-1 px-4">Upload image</button>
            <dialog id="my_modal_3" className="modal backdrop-blur-sm">
              <form method="dialog" className="modal-box bg-color-2">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="font-bold text-lg font-8">Upload your memory</h3>
                <SlCloudUpload className="absolute f-color-3 text-6xl ml-[120px] md:ml-[200px] mt-[100px]" />
                <input
                  className="mt-6 placeholder-color-text"
                  type="file"
                  id="file"
                />
                <input
                  type="text"
                  id="titleoffile"
                  placeholder="image title"
                  className="py-4 my-3 bg-color-7 border-hidden placeholder-color-text"
                />
                <button
                  for="uploadfile"
                  className="bg-color-4 w-full f-color-1 p-3 rounded-xl font-6 "
                >
                  UPLOAD
                </button>
              </form>
            </dialog>
          </div>
          <div className="flex">
            <div className="absolute p-3.5 bg-color-3 rounded-full mt-2 md:mt-0 md:ml-[-10px]">
              <CiSearch className="text-4xl md:text-3xl" />
            </div>
            <input
              type="text"
              className="px-20 py-4 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full bg-color-4"
              placeholder="Search image by name"
            />
          </div>
        </div>

        <Card />
      </div>
    </>
  );
};

export default Gallery;
