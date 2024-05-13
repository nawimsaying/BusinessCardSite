// @ts-ignore
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/router/AppRouter.tsx";
import PortfolioPage from "./page/PortfolioPage.tsx";

function App() {
    return (
        <>
            <Router>
                  <AppRouter/>
            </Router>
        </>
    );
}

export default App;
