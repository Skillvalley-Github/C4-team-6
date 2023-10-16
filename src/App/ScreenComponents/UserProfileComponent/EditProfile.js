import { getAuth } from "firebase/auth";
import React from "react";
import { useLocation } from "react-router-dom";
import AlumniEditProfile from "./components/AlumniEditProfile";
import StudentEditProfile from "./components/StudentEditProfile";
import { useUserContext } from "../../Config/Context/UserProvider";

const EditProfile = () => {

    const location = useLocation();

    const userType = location.state ? location.state.userType : null;

    const auth = getAuth();

    // const user = auth.currentUser;

    const { user } = useUserContext();

  return (
    <>
      <div className="pt-10">
        {user ? (
          // {
          userType === "alumni" ? (
            <AlumniEditProfile />
          ) : (
            <StudentEditProfile />
          )
        ) : (
          // }
          <p>Loading..</p>
        )}
      </div>
    </>
  );
};

export default EditProfile;
