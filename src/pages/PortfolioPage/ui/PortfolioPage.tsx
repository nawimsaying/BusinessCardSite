import React from 'react';
import {motion} from 'framer-motion';

import {NavBar} from "widgets/navbar";
import {Contact} from "features/contact";
import {PortfolioList} from "widgets/portfolioList";



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