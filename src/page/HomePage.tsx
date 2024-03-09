// @ts-ignore
import React from 'react';

import HomeMain from '../components/sections/homeMain/HomeMain';
import NotificationLine from '../components/sections/notificationLine/NotificationLine';
import Header from '../components/sections/header/Header';
import Contact from '../components/sections/contact/Contact';
import WhyUs from '../components/sections/whyUs/WhyUs';
import Footer from '../components/sections/footer/Footer';
import Info from '../components/sections/info/Info';
import CustomerReviewsForMain from '../components/sections/customerReviewsForMain/CustomerReviewsForMain';
import CustomerReviewsForPortfolio from '../components/sections/customerReviewsForPortfolio/CustomerReviewsForPortfolio';

const HomePage = () => {
    return (
        <>
            <Header/>
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