import React from 'react'
import '../Informationcard/Information.css'
export default function Informationcard(props) {
  return (
    <div className='informationcard'>
        <div className="informationcard__container">
                <div className="information__number"><h1 className='informationcard__number'>01</h1></div>
                <h3 className='informationcard__name'>Professional ustozlar</h3>
                <p className='informationcard__text'>Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
        </div>
    </div>
  )
}
