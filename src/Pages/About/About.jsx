import React from 'react'
import '../About/About.css'
import barg from '../../assets/barg.png'
import Aboutcard from '../../Cards/About-card/Aboutcard'
import sms from '../../assets/sms.svg'
import rocket from '../../assets/rocket.svg'
import money from '../../assets/money.svg'
import sumka from '../../assets/sumka.svg'
import arrow from '../../assets/arrow.svg'
import key from '../../assets/key.svg'



export default function About() {
  return (
    <div className='about'> 
       <div className="container">
            <div className="about__container">
                 <h1 className='about__name'>TOPIK academy aniq siz uchun agar siz:</h1>
                 <img className='barg1' src={barg} alt="" />
                 <div className="about__cards">
                    <Aboutcard  img={sms} about="Qisqa muddat ichida Koreys tilida gapirishni istaysiz"  />
                    <Aboutcard  img={rocket} about="Koreys tili o’rganib o’z karyerangizni qurmoqchisiz"/>
                    <Aboutcard  img={money} about="Topik sertifikatini olib Koreyaning nufuzli universitetlariga GRANT yutmoqchisiz"/>
                    <Aboutcard  img={sumka} about="Janubiy Koreya davlatida o’qish va ishlash uchun ketmoqchisiz"/>
                    <Aboutcard  img={arrow} about="Koreys tilini o’rta darajda bilasiz va darajangizni oshirmoqchisiz"/>
                    <Aboutcard  img={key} about="Ko’p yillardan buyon o’qib ham natijaga chiqa olmayapsiz"/>
                 </div>
                 <img className='barg2' src={barg} alt="" />
                 <button className='about__button'>Ha, Bu Men</button>
            </div>
       </div>
    </div>
  )
}
