import React from 'react';
import DevApproach from '../../../components/sections/devApproach/DevApproach.tsx';
import Footer from '../../../components/sections/footer/Footer.tsx';
import AboutUsMain from '../../../components/sections/aboutUsMain/AboutUsMain.tsx';


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