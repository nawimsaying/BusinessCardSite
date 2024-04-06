import {useState} from 'react'
import '/src/index.css'
import styles from './Technologies.module.css';
// @ts-ignore
import {animate, motion} from 'framer-motion'

const Technologies = () => {
    const [text, setText] = useState('REACT, TYPESCRIPT');
    const [activeButton, setActiveButton] = useState(1);
    const [isChanging, setIsChanging] = useState(false);

    // const changeText = (newText: string) => {
    //     setText(newText);
    // };
    const handleButtonClick = (buttonId: any) => {
        setActiveButton(buttonId);
        setIsChanging(true);

        setTimeout(() => {
            if (buttonId == 1)
                setText('REACT, TYPESCRIPT');
            else if (buttonId == 2)
                setText('.NET');
            else if (buttonId == 3)
                setText('DOCKER, GITHUB');

            setIsChanging(false);
        }, 400);
    };

    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ СТЕК</motion.p>

                        <div className={styles.container_flex}>
                            <div className={styles.text_block}>
                                <motion.p variants={sectionAnimationFirst} className={styles.title}>ТЕХНОЛОГИИ</motion.p>

                                <motion.p variants={sectionAnimationSecond} className={styles.description}>Для разработки мы используем только современные и
                                    актуальные средства, чтобы Ваше приложение прослужило как можно дольше и не нуждалось в
                                    серьезных обновлениях.</motion.p>
                            </div>

                            <div className={styles.right_block}>
                                <motion.div variants={sectionAnimationThird} className={styles.buttons_group}>
                                    <button className={activeButton === 1 ? styles.active_btn : styles.unactive_btn}
                                            type='button' onClick={() => handleButtonClick(1)}>FRONTEND
                                    </button>

                                    <button className={activeButton === 2 ? styles.active_btn : styles.unactive_btn}
                                            type='button' onClick={() => handleButtonClick(2)}>BACKEND
                                    </button>

                                    <button className={activeButton === 3 ? styles.active_btn : styles.unactive_btn}
                                            type='button' onClick={() => handleButtonClick(3)}>DEVOPS
                                    </button>
                                </motion.div>

                                <motion.div variants={sectionAnimationFourth} className={styles.desc_block}>
                                    <p id='text_p'
                                       className={isChanging ? styles.desc_text_out : styles.desc_text_in}>{text}</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    )
}

const nameAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.6, type: "spring", stiffness: 50}
    },
}

const sectionAnimationFirst = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.8, type: "spring", stiffness: 50}
    },
}

const sectionAnimationSecond = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.2, type: "spring", stiffness: 50}
    },
}

const sectionAnimationThird = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.8, type: "spring", stiffness: 50}
    },
}

const sectionAnimationFourth = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.2, type: "spring", stiffness: 50}
    },
}

export default Technologies;