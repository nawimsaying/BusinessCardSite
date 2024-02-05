// @ts-ignore
import React from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom';
import classes from "./Header.module.css";

const Header = () => {
    const location = useLocation();

    const navLinkStyle = (path: string) => ({
        color: location.pathname === path ? 'rgba(229, 75, 255, 1)' : 'inherit',
    });

    return (
        <div className={classes.headerNav}>

            <ul>
                <NavLink to="/home" className={classes.navLink} style={navLinkStyle('/home')}>
                    Главная
                </NavLink>
                <NavLink to="/portfolio" className={classes.navLink} style={navLinkStyle('/portfolio')}>
                    Работы
                </NavLink>
                <NavLink to="/aboutUs" className={classes.navLink} style={navLinkStyle('/aboutUs')}>
                    О нас
                </NavLink>
            </ul>

            <div className={classes.orderBtn}>
                <Link to="/contactPage" className={classes.buttonLink}>
                    <button className={classes.button}>
                        Заказать
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Header;
