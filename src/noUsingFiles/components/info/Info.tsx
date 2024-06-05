// @ts-ignore
import React from 'react';
import '/src/index.css'
import styles from "./Info.module.css";
import InfoBlocks from "noUsingFiles/ui/listInfoBlocks/ListInfoBlocks.tsx";

const Info = () => {
    return (
        <div className={styles.background}>
            <div className={styles.flex_bg}>
                <div className={styles.flex_bg_1}>
                    <img className={styles.left_bg_image} src='../../../../public/images/GridInfo.png'></img>
                </div>

                <div className={styles.flex_bg_2}>
                    <img className={styles.right_bg_image}
                         src='../../../../public/images/Grid2Info.png'></img>
                </div>
            </div>

            <div className={styles.headContainer}>
                <h1 className={styles.title}>От идеи до результата </h1>
                <h3 className={styles.description}>В течение всей разработки мы будем делиться с Вами результатами. Мы
                    обязательно доведем проект до
                    конца!</h3>
            </div>

            <div className={styles.containerBlocks}>
                <InfoBlocks/>
            </div>


        </div>
    );
};

export default Info;