import React, { useState } from "react";
import { auth, db, storage } from "../../../Config/Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";

const StudentEditProfile = () => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [department, setDepartment] = useState("");
  const [currentYear, setCurrentYear] = useState("");

  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleAddStudentData = async (e) => {
    e.preventDefault();

    try {
      const path = `users/student/${user.uid}/${Date.now()}`;
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      const usersCollection = collection(db, "users");
      const userDoc = doc(usersCollection, user.uid);
      await setDoc(userDoc, {
        id: user.uid,
        name,
        email: user.email,
        phone,
        department,
        currentYear,
        imageUrl,
        userType: "student",
      });

      console.log("Student data added successfully");
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Add Student Data</div>
      <div>
        <form onSubmit={handleAddStudentData}>
          <input type="file" onChange={handleImageChange} />
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={user.email}
            // onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          <input
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            type="text"
            placeholder="current year"
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default StudentEditProfile;
