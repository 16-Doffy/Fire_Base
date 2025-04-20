import React, { useState } from "react";
import styled from "styled-components";
import Label from "../label/label";
import Input from "../Input/input";
import { useForm } from "react-hook-form";
import IconEyeClose from "../Icon/IconEyeClose";
import { Field } from "../Field";
import IconEyeOpen from "../Icon/IconEyeOpen";
import Buttonn from "../Button/Button";
import { Spin } from "antd";

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

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({ mode: "onChange" });

  const [togglePassword, setTogglePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (values) => {
    if (!isValid) return;
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    setLoading(false);
    console.log("Đăng ký thành công:", values);
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
            hasIcon
            control={control}
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="Enter your Email"
            name="email"
            hasIcon
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

export default SignUpPage;
