import React from 'react'
import '../Registr/Registr.css'
import Registrcard from '../../Cards/Registrcard/Registrcard'
import img1 from '../../assets/katta.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'

export default function Registr() {
  return (
    <div className='registr'>
          <div className="container">
             <div className="registr__container">
                  <h1 className='registr__title'>O’zingizga mos kursga ro’yxatdan o’ting</h1>
                  <div className="registr__card">
                      <Registrcard 
                           img={img1}
                           name={"Intensive"}
                           text={"Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs."}
                           price={"970.000 so’m /oy"}
                          />
                      <Registrcard 
                           img={img2}
                           name={"Odatiy"}
                           text={"Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari."}
                           price={"560.000 so’m /oy"}
                           />
                      <Registrcard
                           img={img3}
                           name={"Individual"}
                           text={"O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar."}
                           price={"1800000 so’m /oy"}

                           />
                      
                  </div>
             </div>
          </div>
    </div>
  )
}
