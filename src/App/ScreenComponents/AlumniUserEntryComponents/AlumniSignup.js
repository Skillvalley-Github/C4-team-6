import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query"; // Import React Query
import supabase from "../../Config/supabase"; // Import Supabase client
import WebHeader from "../HeroComponents/WebHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AlumniSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginAccount = () => {
    navigate("/alumni-login");
  };

  // Define a mutation function for signing up
  const signupMutation = useMutation(async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        full_name: { name },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  });

  const handleSignup = async () => {
    try {
      // Use the React Query mutation
      await signupMutation.mutateAsync();

      // Show a success toast
      toast.success("Account created successfully! Now Login", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the toast after 3 seconds
      });

      // Redirect or perform other actions upon successful registration
      console.log("User registered successfully:", signupMutation.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 px-6 pt-5">
        <div className="col-span-1">
          {/* You may include your WebHeader component here */}
          <WebHeader />
        </div>
        <div className="col-span-1 flex flex-col justify-center align-middle pt-5">
          <div className="form-upper w-[100%]">
            <p className="font-1 f-color-2 text-center w-[100%]">
              create account as
            </p>
            <p className="font-7 f-color-2 text-5xl text-center w-[100%]">
              ALUMNI
            </p>
          </div>
          <div className="form-middle gap-5 mt-6">
            <input
              type="text"
              placeholder="# enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full max-w-xs md:max-w-md rounded-full p-8 bg-color-8 placeholder-color-text no-focus-outline"
            />
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
              className="btn mt-8 w-[90%] md:w-[30%] h-[3.5rem] rounded-full create-acc-btn font-8 text-md text-center"
              onClick={handleSignup}
              disabled={signupMutation.isLoading} // Disable button during loading
            >
              {signupMutation.isLoading ? "Signing Up..." : "SIGN UP"}
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
        <ToastContainer />
      </div>
    </>
  );
};

export default AlumniSignup;
