import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from '../../page/HomePage.tsx';
import ErrorPage from '../../page/ErrorPage.tsx';
import PortfolioPage from "../../page/PortfolioPage.tsx";
import ContactPage from "../../page/ContactPage.tsx";


const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;