// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React, { useState } from "react";
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

import supabase from "../../Config/supabase"; // Import Supabase client

const AlumniLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createAccount = () => {
    navigate("/alumni-signup");
  };

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirect to a success page or perform other actions upon successful login
        navigate('/alumnus');
        console.log("User logged in successfully:", user);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 px-6 pt-5">
        <div className="col-span-1">
          <WebHeader />
        </div>
        <div className="col-span-1 flex flex-col justify-center align-middle pt-5">
          <div className="form-upper w-[100%]">
            <p className="font-1 f-color-2 text-center w-[100%]">join as</p>
            <p className="font-7 f-color-2 text-5xl text-center w-[100%]">
              ALUMNI
            </p>
          </div>
          <div className="form-middle gap-5 mt-6">
            <input
              type="text"
              placeholder="@ enter email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
            <input
              type="password"
              placeholder="# enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
            <button
              className="btn mt-10 w-[90%] md:w-[30%] h-[3.5rem] rounded-full create-acc-btn font-8 text-md text-center"
              onClick={handleLogin}
            >
              LOGIN
            </button>
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
          </div>
          <div className="form-lower pb-10">
            <p className="font-7 f-color-2 text-2xl text-center w-[100%] mt-8">
              OR
            </p>
            <div className="line mt-6 w-[90%] md:w-[30%]"></div>
            <button
              className="btn mt-4 w-[90%] md:w-[30%] h-[3.5rem] rounded-full create-acc-btn font-8 text-md text-center"
              onClick={createAccount}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniLogin;
