import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar : React.FC = () => {
    // const location = useLocation();

    // const navBlackAndWhiteBg = (path: string, element: number) => {
    //     let backgroundColor = '';
    //     let color = '';
        
    //     if (element == 0 || element == 1) {
    //         if (location.pathname === '/') {
    //             backgroundColor = path === '/' ? 'transparent' : 'transparent';
    //             color = path === '/' ? '#878787' : '#878787';
    //         } else if (location.pathname === '/portfolio') {
    //             backgroundColor = path === '/portfolio' ? 'transparent' : 'transparent';
    //             color = path === '/portfolio' ? '#878787' : '#878787';
    //         } else if (location.pathname === '/contact') {
    //             backgroundColor = path === '/contact' ? '#FFF' : '#000';
    //             color = path === '/contact' ? '#000' : '#FFF';
    //         }
    //     }
    //     else {
    //         if (location.pathname === '/') {
    //             backgroundColor = path === '/' ? '#000' : '#FFF';
    //             color = path === '/' ? '#FFF' : '#000';
    //         } else if (location.pathname === '/portfolio') {
    //             backgroundColor = path === '/portfolio' ? '#000' : '#FFF';
    //             color = path === '/portfolio' ? '#FFF' : '#000';
    //         } else if (location.pathname === '/contact') {
    //             backgroundColor = path === '/contact' ? '#000' : '#FFF';
    //             color = path === '/contact' ? '#FFF' : '#00';
    //         }
    //     }

    //     return {
    //         backgroundColor,
    //         color
    //     };
    // };

    return (
        <div className={styles.headerNav}>
            <div className={styles.container}>
                <div className={styles.container_flex}>
                    <ul className={styles.block_links}>
                        <NavLink to="/" className={styles.navLink}>
                            Главная
                        </NavLink>
                        <NavLink to="/portfolio" className={styles.navLink}>
                            Портфолио
                        </NavLink>
                        <NavLink to="/contact" className={styles.contactLink}>
                            Связаться
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
