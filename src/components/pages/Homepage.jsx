import React from 'react';
import styled from 'styled-components';
import HomeBanner from '../module/Home/HomeBanner';
import Layout from '../Layout/Layout';
import HomeFeature from './HomeFeature';


const HomepageStyle = styled.div`
width: 100%;
height: auto;
margin: auto;

`;
const Homepage = () => {


    return (
        <HomepageStyle>
           <Layout >
           <HomeBanner></HomeBanner>
           <HomeFeature></HomeFeature>
           </Layout>
        </HomepageStyle>
    );
};

export default Homepage;

