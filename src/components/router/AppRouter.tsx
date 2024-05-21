import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "page/HomePage";
import {PortfolioPage} from "page/PortfolioPage";
import {ContactPage} from "page/ContactPage";
import {ErrorPage} from "page/ErrorPage";


const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/portfolio" element={<PortfolioPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;