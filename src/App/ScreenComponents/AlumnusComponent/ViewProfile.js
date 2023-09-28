import React from "react";
import { useLocation } from "react-router-dom";
import "../../../AppStyles/viewAlumni.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoMailOpen } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const ViewProfile = () => {
  const location = useLocation();
  const alumniKey = location.state?.key; // Corrected prop name
  console.log(alumniKey);
  const thisAlumni = location.state?.all;
  console.log("state:", location.state);
  console.log("thisAlumni in viewprofile:", thisAlumni);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 lg:col-span-1 mt-28 px-6">
        <figure className="alumni-image">
          <img src={thisAlumni.image} alt="alumni-image" />
        </figure>
      </div>
      <div className="col-span-3 lg:col-span-2 mt-5 lg:mt-28  px-6">
        <div className="mt-5 w-[100%] h-[100%] ">
          <span className="font-8 f-color-7 text-2xl lg:text-4xl uppercase">
            {thisAlumni.name}
          </span>
          <p className="font-1 f-color-5 text-sm lg:text-md">
            Passout @{thisAlumni.passoutyear}
          </p>
          <p className="font-4 f-color-3 mt-4">{thisAlumni.designation}</p>
          <span className="f-color-6">{thisAlumni.shortdescription}</span>
        </div>
        <div className="flex justify-between align-baseline w-[100%] flex-col md:flex-row">
          <div className="links gap-5">
            <button className="social w-16 h-16 rounded-full p-5 text-center">
              <BiLogoLinkedin className="f-color-4 " size={25} />
            </button>
            <button className="social w-16 h-16 rounded-full p-5 text-center">
              <IoMailOpen className="f-color-4 " size={25} />
            </button>
            <button className="social w-16 h-16 rounded-full p-5 text-center">
              <RiTwitterXFill className="f-color-4 " size={25} />
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="join-meet h-[100%] w-[100%] md:w-[100%] rounded-full btn md:mx-2"
            >
              <span className="font-8 f-color-4 text-lg lg:text-xl">RMFW</span>
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
            >
              <div className="modal-box bg-color-2">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg font-8">
                    Request For Mentorship Webinar
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="titleoffile"
                      placeholder="enter your name"
                      className="col-span-1 py-4 my-3 bg-color-7 border-hidden placeholder-color-text"
                    />
                    <input
                      type="text"
                      id="titleoffile"
                      placeholder="enter email"
                      className="col-span-1 py-4 my-3 bg-color-7 border-hidden placeholder-color-text"
                    />
                  </div>
                  <textarea
                      rows="4"
                      type="text"
                      id="titleoffile"
                      placeholder="enter your message"
                      className="py-4 mt-0 mb-6 bg-color-7 border-hidden placeholder-color-text w-[100%] rounded-xl"
                    />
                  <button
                    for="uploadfile"
                    className="bg-color-4 w-full f-color-1 p-3 rounded-xl font-6 "
                  >
                    SEND REQUEST
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-3"></div>
    </div>
  );
};

export default ViewProfile;
