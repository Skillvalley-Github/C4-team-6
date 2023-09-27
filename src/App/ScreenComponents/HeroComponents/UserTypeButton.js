import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const UserTypeButton = () => {
  const navigate = useNavigate();

  const redirectToSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <button className="flex" onClick={redirectToSignIn}>
        <div className="absolute p-5 bg-color-3 rounded-full mt-1 md:mt-0 md:ml-[-10px]">
          <CiSearch className="text-5xl md:text-4xl" />
        </div>
        <div className="px-28 py-4 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full btn-hov">
          <p className="btn-font font-1 text-sm text-start">join as</p>
          <span className=" btn-font font-7 text-md">ALUMNI</span>
        </div>
      </button>
      <button className="flex" onClick={redirectToSignIn}>
        <div className="absolute p-5 bg-color-3 rounded-full mt-1 md:mt-0 md:ml-[-10px]">
          <CiSearch className="text-5xl md:text-4xl" />
        </div>
        <div className="px-28 py-4 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full btn-hov">
          <p className="btn-font font-1 text-sm text-start">join as</p>
          <span className=" btn-font font-7 text-md">STUDENT</span>
        </div>
      </button>
    </>
  );
};

export default UserTypeButton;
