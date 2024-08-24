import React from 'react'
import img1 from '../../assets/katta.svg'
import '../Registrcard/Registrcard.css'
export default function Registrcard(props) {
  return (
    <div className='registrcard'>
           <div className="registrcard__container">
               <img className='registrcard__img' src={props.img} alt="" />
               <ul className='registrcard__list'>
                <li className='registrcard__item'><h3 className='registrcard__name'>{props.name}</h3></li>
                <li className='registrcard__item'><button className='registrcard__btn'>Davomiyligi: 5 oy</button></li>
               </ul>
               <p className='registrcard__text'>{props.text}</p>
               <ul className='registrcard__secondlist'>
                  <li className='registrcard__seconditem'><button className='registrcard__button'>Ro’yxatdan o’tish</button></li>
                  <li className='registrcard__seconditem'><p className='registrcard__price'>{props.price}</p></li>
               </ul>
           </div>
    </div>
  )
}
