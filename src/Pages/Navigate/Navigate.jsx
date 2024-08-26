import React from 'react'
import './../Navigate/Navigate.css'
import logo from '../../assets/logo.svg'

export default function Navigate() {
  return (
    <div className='navigate'>
        <div className="container">
            <div className="navigate__box">
             <img className='nav__img' src={logo} alt="nav__img" />
             <p className='nav__text'>Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</p>
             <ul className='nav__list'>
                <li className='nav__item'><a href="#info" className='nav__link'>Nega biz</a></li>
                <li className='nav__item'><a href="#result" className='nav__link'>Natijalar</a></li>
                <li className='nav__item'><a href="#kurs" className='nav__link'>Kurslar</a></li>
                <li className='nav__item'><a href="#question" className='nav__link'>Kop beriladigan savollar</a></li>
                <li className='nav__item'><a href="tel:+998(33)3060098" className='nav__tel'><span className='nav__num'>+998 (33) 306 0098</span> Hoziroq bog’laning</a></li>
             </ul>
             </div>
        </div>
    </div>
  )
}
