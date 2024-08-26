import React from 'react'
import '../Grant/Grant.css'
import gks from '../../assets/Gks.svg'
export default function Grant() {
    return (
        <div className='grant'>

            <div className="container">

                <div className="grant__container">
                    <h1 className='grant__name'>Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h1>
                    
                    <div className="grant__about">
                               <ul className='grant__listimg'><img className='grant__img' src={gks} alt="" /></ul>
                        <ul className='grant__list'><h1 className='grant__title'>GKS (Global Korean Scholarship) - <span className='grey'>$70.000</span> lik Grant</h1>
                        <p className='grant__text'>Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className='grey'>xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className='grey'> 100% gacha to’liq grant</span>
                            va oylik stipendiya olish imkoniyatingiz bor</p>

                        <h1 className='grant__lowertitle'>GKS granti sizga nima beradi</h1>
                        <p className='grant__lowertext'> Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.
                            Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).
                            Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className='grey'>ko’proq</span></p></ul>
                    </div>
                    <iframe className='garnt__iframe' width="560" height="315" src="https://www.youtube.com/embed/rXfNtl6yimw?si=PoSDP4aQSib47pQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
            </div>
            
        </div>
    )
}
