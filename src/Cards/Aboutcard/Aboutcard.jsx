import React from 'react'
import './Aboutcard.css'
export default function Aboutcard(props) {
  return (
<div>
<div className='aboutcard'>
            <img className='card__img' src={props.img} alt=""/>
            
         
    </div>
            <p className='card__p'>{props.about}</p>
</div>
  )
}
