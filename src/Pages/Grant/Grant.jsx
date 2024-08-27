import React from 'react'
import '../Grant/Grant.css'
import gks from '../../assets/Gks.svg'
import { useTranslation } from 'react-i18next';
export default function Grant() {
    const {t, i18n} = useTranslation();
    return (
        <div className='grant'>

            <div className="container">

                <div className="grant__container">
                    <h1 className='grant__name'>{t('grant.text')}</h1>
                    
                    <div className="grant__about">
                               <ul className='grant__listimg'><img className='grant__img' src={gks} alt="" /></ul>
                        <ul className='grant__list'><h1 className='grant__title'>{t('grant.text1')} <a className='grey' href="">$70.000</a> {t('grant.text2')}</h1>
                        <p className='grant__text'>{t('grant.text3')}  <a className='grey' href="">{t('grant.text4')} </a> {t('grant.text5')}  <a className='grey' href="">{t('grant.text6')} </a>
                        {t('grant.text7')} </p>

                        <h1 className='grant__lowertitle'>{t('grant.text8')} </h1>
                        <p className='grant__lowertext'> {t('grant.text9')} <a className='grey' href="">{t('grant.text10')} </a></p></ul>
                    </div>
                    <iframe className='garnt__iframe' width="560" height="315" src="https://www.youtube.com/embed/rXfNtl6yimw?si=PoSDP4aQSib47pQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
            </div>
            
        </div>
    )
}
