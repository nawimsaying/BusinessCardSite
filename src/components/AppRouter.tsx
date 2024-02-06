// @ts-ignore
import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../page/HomePage.tsx";
import PortfolioPage from "../page/PortfolioPage.tsx";
import AboutUsPage from "../page/AboutUsPage.tsx";
import ErrorPage from "../page/ErrorPage.tsx";
import ContactPage from "../page/ContactPage.tsx";


const AppRouter = () => {


    return (

        <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="portfolio" element={<PortfolioPage/>}/>
            <Route path="aboutUs" element={<AboutUsPage/>}/>
            <Route path="contactPage" element={<ContactPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>

    )
};

export default AppRouter;