import React from 'react'
import '../Information/Information.css'
import Informationcard from '../../Cards/Informationcard/Informationcard'
export default function Information() {
  return (
    <div className='information'>
        <div className="container">
              <div className="information__container">
                    <h1 className='information__title'>Nima uchun aynan TOPIK academy?</h1>
                    <div className="information__card">
                         <Informationcard/>
                         <Informationcard/>
                         <Informationcard/>
                         <Informationcard/>
                         <Informationcard/>
                         <Informationcard/>
                         <h1>33333333333</h1>
                    </div>
              </div>
        </div>
    </div>
  )
}
