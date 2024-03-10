import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./components/sections/header/Header.tsx";
import AppRouter from "./components/AppRouter.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Header/>
            <AppRouter/>
        </Router>
    );
};

export default App;