import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import logo1 from "../Constants/logo.svg";
import logo2 from "../Constants/userDp.svg";
import "../../AppStyles/global.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-color-4 md:px-3 pt-4 fixed z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo1} className="h-[3rem] w-[3rem]" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div
            className="visible md:hidden bg-color-4 mr-4"
            onClick={()=>window.my_modal_1.showModal()}
          >
            <HiMenuAlt3 className="f-color-3 text-3xl" />
          </div>
          <dialog
            id="my_modal_1" className="modal backdrop-blur-md"
          >
            <form method="dialog" className="modal-box bg-color-2 menu">
              <ul className="flex flex-col px-1 gap-4">
                <li className="px-3 py-2">
                  <Link to="/alumnus" className="text-hover font-4 text-lg">
                    Alumnus
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/all-webiner" className="text-hover font-4 text-lg">
                    Webiners
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/alumnus" className="text-hover font-4 text-lg">
                    Careers
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/gallery" className="text-hover font-4 text-lg">
                    Gallery
                  </Link>
                </li>
                <li className="px-3 py-2">
                  <Link to="/alumnus" className="text-hover font-4 text-lg">
                    Discussion
                  </Link>
                </li>
              </ul>
              <div className="modal-action">
                <button className="btn bg-color-4 f-color-3">X</button>
              </div>
            </form>
          </dialog>
          <ul className="hidden md:flex justify-center align-middle space-x-8 px-1 ">
            <li className="">
              <Link to="/alumnus" className="text-hover-d font-2">
                Alumnus
              </Link>
            </li>
            <li className="">
              <Link to="/all-webiner" className="text-hover-d font-2">
                Webiners
              </Link>
            </li>
            <li className="">
              <Link to="/alumnus" className="text-hover-d font-2">
                Careers
              </Link>
            </li>
            <li className="">
              <Link to="/gallery" className="text-hover-d font-2">
                Gallery
              </Link>
            </li>
            <li className="">
              <Link to="/alumnus" className="text-hover-d font-2">
                Discussion
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded">
                <img src={logo2} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
