// @ts-ignore
import React, { useEffect, useState, useRef } from 'react';
import { HashLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/sections/header/Header';
import HomeMain from '../components/sections/homeMain/HomeMain';
import AboutUsMain from '../components/sections/aboutUsMain/AboutUsMain';
import DevApproach from '../components/sections/devApproach/DevApproach';
import OurTeam from '../components/sections/ourTeam/OurTeam';

import styles from '../App.module.css'
import Technologies from '../components/sections/technologies/Technologies';
import Contact from '../components/sections/contact/Contact';

const HomePage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <AnimatePresence>
                {
                    loading ?
                    (
                        <motion.div key="loader"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                alignItems: 'center'
                            }}
                        >
                            <HashLoader color={'#FFF'} loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader" />
                        </motion.div>
                    )
                    :
                    (
                        <motion.div key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.25 } }}
                            exit={{ opacity: 0 }}>

                            <Header/>
                            <HomeMain/>
                            <AboutUsMain/>
                            <DevApproach/>
                            <OurTeam/>
                            <Technologies/>
                            <Contact/>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
};

const loadingAnimation = {
    hidden: {
        x: 0,
        opacity: 0,
        transition: { delay: 1.75, type: "spring", stiffness: 150 },
    },
    visible: {
        x: 0,
        opacity: 1,
    },
}

const pageAnimation = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0, type: "spring", stiffness: 75 },
    },
}

export default HomePage;