import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const UserTypeButton = () => {
  const navigate = useNavigate();

  const redirectToSignIn = (userType) => {
    navigate("/login", { state: { userType } });
  };


  return (
    <>
      <button className="flex" onClick={() => redirectToSignIn("alumni")}>
        <div className="absolute p-5 bg-color-3 rounded-full mt-[0.52rem] md:mt-0 md:ml-[-10px]">
          <FaGraduationCap className="text-2xl md:text-4xl f-color-4" />
        </div>
        <div className="px-28 py-2 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full btn-hov">
          <p className="btn-font font-1 text-sm text-start">join as</p>
          <span className=" btn-font font-7 text-md">ALUMNI</span>
        </div>
      </button>
      <button className="flex" onClick={() => redirectToSignIn("student")}>
        <div className="absolute p-5 bg-color-3 rounded-full mt-[0.52rem] md:mt-0 md:ml-[-10px]">
          <FaUser className="text-2xl md:text-4xl f-color-4" />
        </div>
        <div className="px-28 py-2 md:py-3.5 mt-2 md:mt-0 border-dashed border-2 rounded-full btn-hov">
          <p className="btn-font font-1 text-sm text-start">join as</p>
          <span className=" btn-font font-7 text-md">STUDENT</span>
        </div>
      </button>
    </>
  );
};

export default UserTypeButton;
