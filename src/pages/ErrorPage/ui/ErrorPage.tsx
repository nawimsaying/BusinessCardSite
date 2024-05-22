// @ts-ignore
import React from 'react';
import ErrorOutput from '../../../components/UI/errorOutput/ErrorOutput.tsx';
import {motion} from 'framer-motion';

const ErrorPage = () => {
    return (
        <>
            <motion.div key="content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0, duration: 0.25}}}
                        exit={{opacity: 0}}>
                            
                <ErrorOutput/>
            </motion.div>
        </>
    );
};

export default ErrorPage;