import React from 'react'
import './../Header/Header.css'
import headerpic from '../../assets/katta.svg'
import barg from '../../assets/barg.png'

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__left">
                    <p className='header__p'>3 oyda Koreys tilida gapirishni boshlang</p>
                    <h1 className='header__name'>Janubiy Koreya Universitetlarida 100% gacha grant asosida <br />o’qish imkoniyati</h1>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <div className="lidiv"><img className='header__barg' src={barg} alt="" />
                            <p className='li__p'>5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p></div>
                        </li>
                        <li className='header__item'><div className="lidiv"><img className='header__barg' src={barg} alt="" /><p className='li__p'>Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada
                        o’qish va ishlash imkoniyati</p></div>
                        </li>
                    </ul>
                    <button className='button'>bepul Darsga yozilish</button>
                    <p className='header__text'>Birinchi darsga bepul yoziling!</p>
                </div>
                <div className="header__right">
                    <img className='header__img' src={headerpic} alt="" />
                </div>
            </div>
        </div>
    )
}
