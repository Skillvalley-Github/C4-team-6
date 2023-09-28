// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
// ------------------------------------------------------
// Styles
// ------------------------------------------------------
import "../../../AppStyles/global.css";
import "../../../AppStyles/colors.css";
import "../../../AppStyles/Login-Signup.css";
// ------------------------------------------------------
// Components
// ------------------------------------------------------
import WebHeader from "../HeroComponents/WebHeader";

const StudentSignup = () => {
  const navigate = useNavigate();

  const loginAccount = () => {
    navigate("/student-login");
  };
  return (
    <>
      <div className="grid grid-cols-1 px-6 pt-5">
        <div className="col-span-1">
          <WebHeader />
        </div>
        <div className="col-span-1 flex flex-col justify-center align-middle pt-10 md:pt-12">
          <div className="form-upper w-[100%]">
            <p className="font-1 f-color-2 text-center w-[100%]">
              create account as
            </p>
            <p className="font-7 f-color-2 text-5xl text-center w-[100%]">
              STUDENT
            </p>
          </div>
          <div className="form-middle gap-5 mt-6">
            <input
              type="text"
              placeholder="# enter your name"
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
            <input
              type="text"
              placeholder="@ enter email id"
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
            <input
              type="text"
              placeholder="# enter password"
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
          </div>
          <div className="form-lower">
            <p className="font-7 f-color-2 text-2xl text-center w-[100%] mt-8">
              OR
            </p>
            <div className="line mt-6 w-[90%] md:w-[30%]"></div>
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-2 form-lower">
                <p className="font-3 f-color-2 mt-8">
                  Already have an account?
                </p>
              </div>
              <div className="col-span-2">
                <button
                  className="btn mt-10 w-[100%] h-[3.5rem] rounded-full create-acc-btn font-8 text-md text-center"
                  onClick={loginAccount}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSignup;
