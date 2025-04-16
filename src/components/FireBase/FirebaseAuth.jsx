import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,

  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./Firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [userInfor, setUserInfor] = useState(" ");
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUserInfor(currentUser);
    } else {
      setUserInfor("");
    }
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: "Nhut Duy",
      });
      setUserInfor(user);
      console.log("profile-success");
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: user.user.uid
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin =async (e) => {
    e.preventDefault();
   const cred = await signInWithEmailAndPassword(auth, values.email, values.password);
  setUserInfor(cred);
  console.log("Login success")
  };
  return (
    <>
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg p-5 mb-10">
      <form onSubmit={handleCreateUser}>
        <input
          type="email"
          className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          placeholder="Enter your Email address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          placeholder="Enter your passsword"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-5 bg-blue-500 text-white text-sm font-medium rounded-lg w-full"
        >
          SignUp
        </button>
      </form>
      <div className="mt-10 flex items-center gap-x-5">
        <span>{userInfor?.displayName}</span>
        <button
          className="p-5 bg-purple-500 text-white text-sm font-medium rounded-lg "
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
    </div>
    <form onSubmit={handleLogin}>
        <input
          type="email"
          className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          placeholder="Enter your Email address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          placeholder="Enter your passsword"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-5 bg-pink-500 text-white text-sm font-medium rounded-lg w-full"
        >
          Loginin
        </button>
      </form>
    </>
  );
};

export default FirebaseAuth;
