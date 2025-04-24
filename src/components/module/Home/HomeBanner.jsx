import React from "react";
import styled from "styled-components";
import Buttonn from "../../Button/Button";
import { NavLink } from "react-router-dom";

const HomeBannerStyled = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(to right bottom, #75ba75 35%, #4ac17f 55%);
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .banner-content {
    max-width: 500px;
    color: white;
  }
  .banner-heading {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .banner-desc {
    line-height: 1.75;
    margin-bottom: 40px;
    font-size: 20px;
    color:#e0f2fe ;
    font-weight: 600;
  }
  .GETSTATE{
    color: #4ac17f;
    font-weight: 600;
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <div className="container w-full h-auto m-auto  ">
        <div className="banner ">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempore officiis qui porro minus corporis, necessitatibus alias
              deleniti nostrum sed sequi? Consequuntur molestiae officia ea,
              animi ex totam enim illo.
            </p>
            <div className="GETSTATE items-center w-30 h-10 m-auto bg-white border border-blue-800  p-1 text-xl font-light">
              <NavLink type="button" to="/sign-in">
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="banner-img">
            <img src= "/img/m2.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyled>
  );
};

export default HomeBanner;
