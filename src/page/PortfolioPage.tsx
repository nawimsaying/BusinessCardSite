import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import PortfolioList from "../components/sections/portfolioList/PortfolioList.tsx";
import NavBar from "../components/UI/navbar/NavBar.tsx";
import Contact from "../components/sections/contact/Contact.tsx";


const PortfolioPage : React.FC= () => {
    return (
        <>
            <motion.div key="content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0, duration: 0.25}}}
                        exit={{opacity: 0}}>

                <NavBar/>
                <PortfolioList/>
                <Contact/>
            </motion.div>
        </>
    );
};

export default PortfolioPage;