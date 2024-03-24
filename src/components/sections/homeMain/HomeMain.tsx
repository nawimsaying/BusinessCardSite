// @ts-ignore
import React from 'react';
import '/src/index.css'
import styles from './HomeMain.module.css';
import {color} from 'framer-motion';
import ParticleImage, {ParticleOptions, Vector, forces, ParticleForce} from "react-particle-image";

const HomeMain = () => {
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
    const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 45);
    };


    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>

                    <ParticleImage className={styles.title_particles}
                                   src={"public/svg/VIRTSPACE.svg"}
                                   width={Number(1350)}
                                   scale={1}
                                   entropy={20}
                                   maxParticles={4000}
                                   particleOptions={particleOptions}
                                   mouseMoveForce={motionForce}
                                   touchMoveForce={motionForce}
                                   backgroundColor="transparent"
                    />

                </div>

                <div className={styles.desc_container}>
                    <p className={styles.description}>Создаем виртуальные пространства для Вашего успеха. От визитки до
                        интернет-магазина.</p>
                </div>
            </div>
        </>
    );
};

export default HomeMain;