import React, { useEffect, useRef } from 'react';
import "../../styles/navbar.scss";
import logo from '../../images/logo/nadjemou logo 02.png';
import { Link, useLocation } from 'react-router-dom';
import { ChangeLang } from './ChangeLang';
import { useGlobalContext } from '../../context';


export const Navbar = () => {

    const { t } = useGlobalContext();

    let location = useLocation();
    const containerRef = useRef(null);


    useEffect(() => {
        let myNav = containerRef.current;
        let list = Array.from(myNav.children)
        let currentLocation = location.pathname.slice(1);
        list.map(li => {
            li.firstElementChild.classList.remove("active");
            if ((li.dataset).toUpperCase() === (currentLocation).toUpperCase()) {
                li.firstElementChild.classList.add("active");
            }
            return null;
        });

    }, [location]);


    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/home">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul className="nav-list list" ref={containerRef}>
                <li data-set="home"><Link to="/home" className="active">{t('navbar.home')}</Link></li>
                <li data-set="about-us"><Link to="/about-us">{t('navbar.about')}</Link></li>
                <li data-set="skills"><Link to="/skills">{t('navbar.skills')}</Link></li>
                <li data-set="portfolio"><Link to="/portfolio">{t('navbar.porfolio')}</Link></li>
                <li data-set="contact"><Link to="/contact">{t('navbar.Contact')}</Link></li>
            </ul>
            <ChangeLang />
        </nav>
    )



}
