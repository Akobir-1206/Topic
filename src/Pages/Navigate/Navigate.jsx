import React  from 'react'
import './../Navigate/Navigate.css'
import logo from '../../assets/logo.svg'
import { useTranslation } from 'react-i18next';

export default function Navigate() {
  const {t, i18n} = useTranslation();
  const languages = localStorage.getItem('i18nextLng')
  const handleChange = (event) =>{
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  return (
    <div className='navigate'>
        <div className="container">
            <div className="navigate__box">
             <img className='nav__img' src={logo} alt="nav__img" />
             <p className='nav__text'>{t('navbar.text')}</p>
             <ul className='nav__list'>
                <li className='nav__item'><a href="#info" className='nav__link'>{t('navbar.text1')}</a></li>
                <li className='nav__item'><a href="#result" className='nav__link'>{t('navbar.text2')}</a></li>
                <li className='nav__item'><a href="#kurs" className='nav__link'>{t('navbar.text3')}</a></li>
                <li className='nav__item'><a href="#question" className='nav__link'>{t('navbar.text4')}</a></li>
                <select name="lng" id="lng" onChange={handleChange} value={languages}>
                  <option value="uz">Uzbek</option>
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                </select>
                <li className='nav__item'><a href="tel:+998(33)3060098" className='nav__tel'><span className='nav__num'>+998 (33) 306 0098</span> {t('navbar.text5')}</a></li>
             </ul>
             </div>
        </div>
    </div>
  )
}
