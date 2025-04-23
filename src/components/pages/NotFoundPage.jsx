import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NotFoundPageStyle = styled.div`
.back{
    background-image: linear-gradient(to top right, #2691d9, #2a2f83);
    width: 250px;
    height: 50px;
    color: white;
    text-align: center;
    margin: auto;
    font-size: 20px;
    padding: 5px;
    font-weight: 500;
}


`;
const NotFoundPage = () => {
    return (
        <NotFoundPageStyle>
         <img src="/img/301.png" alt="notfound"/>
            <NavLink to="/">
               <h1 className='back'>GO BACK HOMEPAGE</h1>

            </NavLink>
        </NotFoundPageStyle>
    );
};

export default NotFoundPage;