// @ts-ignore
import React from 'react';

import DevApproach from '../components/sections/devApproach/DevApproach';
import Footer from '../components/sections/footer/Footer';
import AboutUsMain from '../components/sections/aboutUsMain/AboutUsMain';
import Header from '../components/sections/header/Header';

const AboutUsPage = () => {
    return (
        <>
            <Header/>
            <AboutUsMain/>
            <DevApproach/>
            <Footer/>
        </>
    );
};

export default AboutUsPage;