// @ts-ignore
import React, {useEffect, useState} from 'react';
import Header from "./components/UI/header/Header.tsx";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";


function App() {


    return (
        <>
            <div className='container'>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                </BrowserRouter>

            </div>
        </>
    );
}

export default App;
