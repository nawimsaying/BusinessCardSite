import React from 'react';

import PortfolioList from "../components/sections/portfolioList/PortfolioList.tsx";
import NavBar from "../components/UI/navbar/NavBar.tsx";
import Contact from "../components/sections/contact/Contact.tsx";


const PortfolioPage : React.FC= () => {
    return (
        <div>
            <NavBar/>
            <PortfolioList/>
            <Contact/>
        </div>
    );
};

export default PortfolioPage;