// @ts-ignore
import React from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom';
import classes from "./NavBar.module.css";

const Header = () => {
    const location = useLocation();

    const navLinkStyle = (path: string) => ({
        color: location.pathname === path ? 'rgba(229, 75, 255, 1)' : 'inherit',
    });

    return (
        <div className={classes.headerNav}>
            <div className={classes.container}>
                <div className={classes.container_flex}>
                    <div className={classes.block_logo}>
                        <div className={classes.logo}>

                        </div>
                    </div>

                    <ul className={classes.block_links}>
                        <NavLink to="/" className={classes.navLink} style={navLinkStyle('/')}>
                            Главная
                        </NavLink>
                        <NavLink to="/portfolio" className={classes.navLink} style={navLinkStyle('/portfolio')}>
                            Работы
                        </NavLink>
                        <NavLink to="/aboutUs" className={classes.navLink} style={navLinkStyle('/aboutUs')}>
                            О нас
                        </NavLink>
                    </ul>

                    <div className={classes.block_button}>
                        <Link to="/contactPage" className={classes.buttonLink}>
                            <button className={classes.button}>
                                Заказать
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
