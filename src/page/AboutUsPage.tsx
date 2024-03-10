import React from 'react';
import DevApproach from '../components/sections/devApproach/DevApproach';
import Footer from '../components/sections/footer/Footer';
import AboutUsMain from '../components/sections/aboutUsMain/AboutUsMain';


const AboutUsPage:React.FC = () => {
    return (
        <>
            <AboutUsMain/>
            <DevApproach/>
            <Footer/>
        </>
    );
};

export default AboutUsPage;