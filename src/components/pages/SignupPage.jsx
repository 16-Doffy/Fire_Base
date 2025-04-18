import React from "react";
import styled from "styled-components";
import Label from "../label/label";
import Input from "../Input/input";
import { useForm } from "react-hook-form";
import IconEyeClose from "../Icon/IconEyeClose";
import { Field } from "../Field";
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

  /* .inpat {
    width: 100%;
    padding: 20px;
    background-color: #E7ECF3;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .inpat:focus {
    background-color: white;
    border-color: #2EBAC1;
  } */
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, watch },
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
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
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="Enter your Email"
            name="email"
            hasIcon
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            hasIcon
            control={control}
          >
            <IconEyeClose className="icon-eye"></IconEyeClose>
          </Input>
        </Field>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
