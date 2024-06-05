import React from 'react';
import Footer from 'noUsingFiles/components/footer/Footer.tsx';
import {AboutUsMain} from "widgets/aboutUsMain";
import {DevApproach} from "widgets/devApproach";


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