import React from 'react';
import {motion} from 'framer-motion';
import Contact from 'components/sections/contact/Contact.tsx';
import NavBar from "components/UI/navbar/NavBar.tsx";

const ContactPage : React.FC = () => {
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
