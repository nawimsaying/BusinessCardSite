// @ts-ignore
import React from 'react';

import Header from '../components/sections/header/Header';
import CustomerReviewsForPortfolio from '../components/sections/customerReviewsForPortfolio/CustomerReviewsForPortfolio';
import Footer from '../components/sections/footer/Footer';
import PortfolioMain from '../components/sections/portfolioMain/PortfolioMain';
import CustomerReviewsForMain from '../components/sections/customerReviewsForMain/CustomerReviewsForMain';
import Info from '../components/sections/info/Info';

const PortfolioPage = () => {
    return (
        <>
            <Header/>
            <PortfolioMain/>
            <CustomerReviewsForMain/>
            <Footer/>
        </>
    );
};

export default PortfolioPage;