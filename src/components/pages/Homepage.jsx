import React from 'react';
import styled from 'styled-components';
import HomeBanner from '../module/Home/HomeBanner';
import Layout from '../Layout/Layout';


const HomepageStyle = styled.div`


`;
const Homepage = () => {


    return (
        <HomepageStyle>
           <Layout >
           <HomeBanner></HomeBanner>
           </Layout>
        </HomepageStyle>
    );
};

export default Homepage;

