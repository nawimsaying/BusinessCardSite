// @ts-ignore
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import Header from '../components/sections/header/Header';
import Contact from '../components/sections/contact/Contact';
import Footer from '../components/sections/footer/Footer';
import NavBar from "../components/UI/navbar/NavBar.tsx";

const ContactPage = () => {
    return (
        <>
            <motion.div key="content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0, duration: 0.25}}}
                        exit={{opacity: 0}}>

                <NavBar/>
                <Contact/>
            </motion.div>
        </>
    );
};

export default ContactPage;
