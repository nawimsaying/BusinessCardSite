// @ts-ignore
import React from 'react';

import HomeMain from '../components/sections/homeMain/HomeMain';
import Contact from '../components/sections/contact/Contact';
import WhyUs from '../components/sections/whyUs/WhyUs';
import Footer from '../components/sections/footer/Footer';
import Info from '../components/sections/info/Info';
import CustomerReviewsForPortfolio from '../components/sections/customerReviewsForPortfolio/CustomerReviewsForPortfolio';

const HomePage:React.FC = () => {
    return (
        <>
            <HomeMain/>
            <Info/>
            <WhyUs/>
            <CustomerReviewsForPortfolio/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default HomePage;