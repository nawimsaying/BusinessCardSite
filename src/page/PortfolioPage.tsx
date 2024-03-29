import React from 'react';

import Header from '../components/sections/header/Header';
import Footer from '../components/sections/footer/Footer';
import PortfolioMain from '../components/sections/portfolioMain/PortfolioMain';
import CustomerReviewsForMain from '../components/sections/customerReviewsForMain/CustomerReviewsForMain';


const PortfolioPage: React.FC = () => {
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