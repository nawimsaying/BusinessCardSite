import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from '../../page/HomePage.tsx';
import ErrorPage from '../../page/ErrorPage.tsx';


const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;