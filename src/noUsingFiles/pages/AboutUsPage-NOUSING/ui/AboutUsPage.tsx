import React from 'react';
import DevApproach from '../../../../components/sections/devApproach/DevApproach.tsx';
import Footer from 'noUsingFiles/components/footer/Footer.tsx';
import {AboutUsMain} from "widgets/aboutUsMain";


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