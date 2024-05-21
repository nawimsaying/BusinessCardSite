import React, {useEffect, useState} from 'react';
// @ts-ignore
import {HashLoader} from 'react-spinners';
// @ts-ignore
import {motion, AnimatePresence} from 'framer-motion';

// @ts-ignore
import Header from 'components/sections/header/Header.tsx';
import HomeMain from 'components/sections/homeMain/HomeMain.tsx';
import AboutUsMain from 'components/sections/aboutUsMain/AboutUsMain.tsx';
import DevApproach from 'components/sections/devApproach/DevApproach.tsx';
import OurTeam from 'components/sections/ourTeam/OurTeam.tsx';
import Technologies from 'components/sections/technologies/Technologies.tsx';
import Contact from 'components/sections/contact/Contact.tsx';
import NavBar from "components/UI/navbar/NavBar.tsx";

const HomePage: React.FC = () => {
    // @ts-ignore
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'VirtSpace';
    })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>

            <motion.div key="content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0, duration: 0.25}}}
                        exit={{opacity: 0}}>

                <NavBar/>
                <HomeMain/>
                <AboutUsMain/>
                <DevApproach/>
                <OurTeam/>
                <Technologies/>
                <Contact/>
            </motion.div>
        </>
    );
};

// @ts-ignore
const loadingAnimation = {
    hidden: {
        x: 0,
        opacity: 0,
        transition: {delay: 1.75, type: "spring", stiffness: 150},
    },
    visible: {
        x: 0,
        opacity: 1,
    },
}

// @ts-ignore
const pageAnimation = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0, type: "spring", stiffness: 75},
    },
}

export default HomePage;