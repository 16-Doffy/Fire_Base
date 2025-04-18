import React, { Children } from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import IconEyeOpen from "../Icon/IconEyeOpen";
const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    background-color: #e7ecf3;
    padding: 20px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .icon-eye{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({
  name = "",
  type = "text",
  hasIcon = false,
   children,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={hasIcon}>
      <input type={type} id={name} {...field} {...props} />
      {hasIcon ? children : null} 
    </InputStyles>
  );
};

export default Input;
