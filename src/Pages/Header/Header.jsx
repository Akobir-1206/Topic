import React from 'react'
import './../Header/Header.css'
import headerpic from '../../assets/katta.svg'
import barg from '../../assets/barg.png'
import { useTranslation } from 'react-i18next';
export default function Header() {
    const {t, i18n} = useTranslation();
    return (
        <div className="container">
                <div className='header'>
                <div className="header__left">
                    <p className='header__p'>{t('header.text')}</p>
                    <h1 className='header__name'>{t('header.text1')}</h1>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <div className="lidiv"><img className='header__barg' src={barg} alt="" />
                            <p className='li__p'>{t('header.text2')}</p></div>
                        </li>
                        <li className='header__item'><div className="lidiv"><img className='header__barg' src={barg} alt="" /><p className='li__p'>{t('header.text3')}</p></div>
                        </li>
                    </ul>
                    <button className='button'><a className='header__link' href="#kurs">{t('header.text4')}</a></button>
                    <p className='header__text'>{t('header.text5')}</p>
                </div>
               
            </div>
        </div>
    )
}
