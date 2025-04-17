import React from "react";
import styled from "styled-components";
import Label from "../label/label";

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
    color: #2EBAC1;
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

  .inpat {
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
  }
`;


const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img src="/img/mk.png" alt="monkey login" className="logo" />
      <h1 className="heading">Monkey Blogging</h1>
      <form>
        <div className="field">
          <Label htmlFor="Fullname">
            Fullname
          </Label>
          <input
            type="text"
            id="fullname"
            className="inpat"
            placeholder="Enter your fullname"
          ></input>
        </div>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
