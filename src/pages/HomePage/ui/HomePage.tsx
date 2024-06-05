import React, {useEffect, useState} from 'react';
// @ts-ignore
import {HashLoader} from 'react-spinners';
// @ts-ignore
import {motion, AnimatePresence} from 'framer-motion';
import {NavBar} from "widgets/navbar";
import {Contact} from "features/contact";
import {AboutUsMain} from "widgets/aboutUsMain";
import {DevApproach} from "widgets/devApproach";
import {HomeMain} from "widgets/homeMain";
import {OurTeam} from "widgets/ourTeam";
import {Technologies} from "widgets/technologies";


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