import React from 'react'
import '../About-card/aboutcard.css'
export default function Aboutcard(props) {
  return (
    <div className='aboutcard'>
            <img className='card__img' src={props.img} alt="" width={100}/>
            <p className='card__p'>{props.about}</p>
            
         
    </div>
  )
}
