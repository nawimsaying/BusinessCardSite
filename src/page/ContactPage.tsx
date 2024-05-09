// @ts-ignore
import React from 'react';

import Header from '../components/sections/header/Header';
import Contact from '../components/sections/contact/Contact';
import Footer from '../components/sections/footer/Footer';
import NavBar from "../components/UI/navbar/NavBar.tsx";

const ContactPage = () => {
    return (
        <>
          {/*  <Header/>*/}
            <NavBar/>
            <Contact/>
        </>
    );
};

export default ContactPage;
