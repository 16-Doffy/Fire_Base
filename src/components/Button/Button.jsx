import React from 'react';
import { Children } from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
cursor: pointer;
padding: 20px;
line-height: 1;
color:white;
background-image: linear-gradient(to right bottom, #65bf2e 56%, #65bf2e 44%);
&:disabled {
  opacity: 0.5;
  pointer-events: none;
}
border-radius: 8px;
font-size: 18px;
font-weight: 600;
width: 100%;

`;
// const {isLoading} = props;
// const child = !!isLoading ? <Spin></Spin> : children;
const Buttonn = ({type = 'button', onClick= () => {},children, ...props}) => {
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Buttonn;