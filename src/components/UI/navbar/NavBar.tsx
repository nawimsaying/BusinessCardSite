import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = () => {
    const location = useLocation();

    const navBlackAndWhiteBg = (path: string) => {
        let backgroundColor = '';
        let color = '';

        if (location.pathname === '/') {
            backgroundColor = path === '/' ? '#FFF' : '#000';
            color = path === '/' ? '#000' : '#FFF';
        } else if (location.pathname === '/portfolio') {
            backgroundColor = path === '/portfolio' ? '#000' : '#FFF';
            color = path === '/portfolio' ? '#FFF' : '#000';
        } else if (location.pathname === '/contact') {
            backgroundColor = path === '/contact' ? '#FFF' : '#000';
            color = path === '/contact' ? '#000' : '#FFF';
        }

        return {
            backgroundColor,
            color
        };
    };

    return (
        <div className={styles.headerNav}>
            <div className={styles.container}>
                <div className={styles.container_flex}>
                    <ul className={styles.block_links}>
                        <NavLink to="/" className={styles.navLink} style={navBlackAndWhiteBg('/')}>
                            Главная
                        </NavLink>
                        <NavLink to="/portfolio" className={styles.navLink} style={navBlackAndWhiteBg('/portfolio')}>
                            Портфолио
                        </NavLink>
                        <NavLink to="/contact" className={styles.navLink} style={navBlackAndWhiteBg('/contact')}>
                            Связаться
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
