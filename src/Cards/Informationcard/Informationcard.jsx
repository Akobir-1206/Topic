import React from 'react'
import '../Informationcard/Informationcard.css'
export default function Informationcard(props) {
  return (
    <div className='informationcard'>
        <div className="informationcard__container">
                <div className="informationcard__box"><h1 className='informationcard__number'>{props.number}</h1></div>
                <h3 className='informationcard__name'>{props.name}</h3>
                <p className='informationcard__text'>{props.text}</p>
        </div>
    </div>
  )
}
