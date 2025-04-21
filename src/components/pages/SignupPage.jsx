import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Label from "../label/label";
import Input from "../Input/input";
import { useForm } from "react-hook-form";
import IconEyeClose from "../Icon/IconEyeClose";
import { Field } from "../Field";
import IconEyeOpen from "../Icon/IconEyeOpen";
import Buttonn from "../Button/Button";
import { Spin } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../FireBase/Firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import PropTypes from 'prop-types';

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
    width: 200px;
    height: 200px;
  }
  .heading {
    text-align: center;
    color: #2ebac1;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .field {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
    font-size: 16px;
  }
`;
const schema = yup.object({
  fullname: yup.string().required("pls enter your full nname"),
  email: yup
    .string()
    .email("pls enter your email")
    .required("pls enter your email address"),
  password: yup
    .string()
    .min(8, "your password must be at least 8 character")
    .required("pls enter your passwords"),
});
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrError = Object.values(errors); //lấy mảng login
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  console.log(errors);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (values) => {
    if (!isValid) return;
    console.log("value", values);
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    // setLoading(true);
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    // setLoading(false);
    // console.log("Đăng ký thành công:", values);
    const colRef = collection(db, "user");
    addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Create user successfully");
    navigate("/");
  };

  return (
    <SignUpPageStyles>
      <img src="/img/mk.png" alt="monkey login" className="logo" />
      <h1 className="heading">Monkey Blogging</h1>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="Fullname">Fullname</Label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            name="fullname"
            control={control}
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="Enter your Email"
            name="email"
            control={control}
          />
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            hasIcon
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                className="icon-eye"
                onClick={() => setTogglePassword(true)}
              />
            ) : (
              <IconEyeOpen
                className="icon-eye"
                onClick={() => setTogglePassword(false)}
              />
            )}
          </Input>
        </Field>
        <Buttonn type="submit" disabled={loading}>
          {loading ? <Spin /> : "SignUp"}
        </Buttonn>
      </form>
    </SignUpPageStyles>
  );
};
Buttonn.propTypes = {
  type:PropTypes.oneOf(["button","submit"]).isRequired,
  onClick:PropTypes.func,
  children:PropTypes.node,
};
export default SignUpPage;
