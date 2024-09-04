import React, { useEffect, useState } from 'react';
import './../Navigate/Navigate.css';
import logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

export default function Navigate() {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng') || 'uz'; // Default til 'uz' qilindi, agar til saqlanmagan bo'lsa
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menyusining holatini boshqarish

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage); // Tanlangan tilni localStorage ga saqlash
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !document.getElementById('nav__list').contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className='navigate'>
            <div className="container">
                <div className="navigate__box">
                    <img className='nav__img' src={logo} alt="nav__img" />
                    <p className='nav__text'>{t('navbar.text')}</p>
                    <button className='burger-button' onClick={toggleMenu}>
                        &#9776; {/* Burger ikonkasi uchun ishlatiladigan unicode */}
                    </button>
                    <ul id="nav__list" className={`nav__list ${isMenuOpen ? 'nav__list--open' : ''}`}>
                        <li className='nav__item'>
                            <a href="#info" className='nav__link' onClick={closeMenu}>
                                {t('navbar.text1')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#result" className='nav__link' onClick={closeMenu}>
                                {t('navbar.text2')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#kurs" className='nav__link' onClick={closeMenu}>
                                {t('navbar.text3')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#question" className='nav__link' onClick={closeMenu}>
                                {t('navbar.text4')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="tel:+998(33)3060098" className='nav__tel' onClick={closeMenu}>
                                <span className='nav__num'>+998 (33) 306 0098</span> {t('navbar.text5')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <select name="lng" id="lng" onChange={handleChange} value={languages}>
                                <option value="uz">Uzbek</option>
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
