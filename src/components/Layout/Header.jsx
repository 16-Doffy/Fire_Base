import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const menuLink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const HeaderStyled = styled.header`
padding: 15px;
  .header-main {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .logo {
    max-width: 100%;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 22px;
  }
  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
  }
  .search-icon {
    position: absolute;
    transform: translateY(-5%);
    right: 15px;
    
  }
  .header-button{
    margin-left: 20px;
    width: 200px;
    height: 50px;
    background-image: linear-gradient(to right,#6dbfb8, #e0f2fe);
    font-size: 16px;
    font-weight: bold;
    color: #2a2f83;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <div className="container w-full max-w-[1180px] m-auto p-0">
        <div className="header-main">
          <NavLink to="/">
            <img src="/img/mk.png" alt="monkey login" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLink.map((item) => (
              <li className="menu-link" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts...."
            />
            <span className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <Button className="header-button"
          
          
          >Sign Up</Button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
