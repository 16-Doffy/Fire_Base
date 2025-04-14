import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./Firebase-config";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [userInfor, setUserInfor] = useState(" ");

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    if (user) setUserInfor(user);
    console.log("CreateUser-success");
  };

  return (
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
    </div>
  );
};

export default FirebaseAuth;
