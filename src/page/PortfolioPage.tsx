import React from 'react';
import Footer from '../components/sections/footer/Footer';
import PortfolioMain from '../components/sections/portfolioMain/PortfolioMain';
import CustomerReviewsForMain from '../components/sections/customerReviewsForMain/CustomerReviewsForMain';

const PortfolioPage : React.FC = () => {
    return (
        <>
            <PortfolioMain/>
            <CustomerReviewsForMain/>
            <Footer/>
        </>
    );
};

export default PortfolioPage;