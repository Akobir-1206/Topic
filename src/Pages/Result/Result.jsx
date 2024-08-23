import React from 'react'
import '../Result/Result.css'
import Marquee from "react-fast-marquee";
import sertif from '../../assets/sertif.svg'
export default function Result() {
    return (
        <div className='result'>
            <div className="container">
                <div className="result__container">
                    <h1 className='result__name'>O’quvchilarimizning natijalari TOPIK 6 gacha</h1>
                    <Marquee speed={100}>
                    <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <Marquee speed={100} direction='right'>
                        <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <button className='result__btn'>ARIZA QOLDIRISH</button>
                </div>
                
            </div>
        </div>
    )
}
