import React, { useState, useEffect } from 'react';
import styles from './HomeMain.module.css';
// @ts-ignore
import ParticleImage, {ParticleOptions, Vector, forces, ParticleForce} from "react-particle-image";
import { motion } from 'framer-motion'

const HomeMain: React.FC = () => {
    // @ts-ignore
    const particleOptions: ParticleOptions = {
        filter: ({x, y, image}) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 50 (range 0-255)
            return pixel.b > 55;
        },
        color: ({}) => "#FFF",
        radius: () => Math.random() * 1.5 + 0.5,
        mass: () => 15,
        friction: () => 0.5,
        initialPosition: ({canvasDimensions}) => {
            return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
        }
    };

    // @ts-ignore
    const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 45);
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
    }, 1500); // Пример задержки в 1 секунду
    
    return () => clearTimeout(timeoutId);
    }, []); // Эффект запускается только при монтировании компонента

    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>

                    {/* <ParticleImage className={styles.title_particles}
                                   src={"public/svg/VIRTSPACE.svg"}
                                   width={Number(1350)}
                                   scale={1}
                                   entropy={20}
                                   maxParticles={4000}
                                   particleOptions={particleOptions}
                                   mouseMoveForce={motionForce}
                                   touchMoveForce={motionForce}
                                   backgroundColor="transparent"
                    /> */}

                    <motion.p initial='hidden' whileInView='visible' variants={titleAnimation} className={styles.title} viewport={{once: true}}>VIRTSPACE</motion.p>
                </div>

                <div className={styles.desc_container}>
                    <motion.p initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} 
                        transition={{ duration: 0, type: "spring", stiffness: 25 }} 
                        viewport={{once: true}} 
                        className={styles.description}>
                            Создаем современные веб-приложения. От визитки до интернет-магазина.
                    </motion.p>
                </div>
            </div>
        </>
    );
};

const titleAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, type: "spring", stiffness: 15 }
    },
}

export default HomeMain;