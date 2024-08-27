import React from 'react'
import '../Registr/Registr.css'
import Registrcard from '../../Cards/Registrcard/Registrcard'
import img1 from '../../assets/katta.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import { useTranslation } from 'react-i18next'

export default function Registr() {
     const {t, i18n} = useTranslation();
  return (
    <div className='registr' id='kurs'>
          <div className="container">
             <div className="registr__container">
                  <h1 className='registr__title'>{t('registr.text')}</h1>
                  <div className="registr__card">
                      <Registrcard 
                           img={img1}
                           name={t('registr.text1')}
                           text={t('registr.text2')}
                           price={t('registr.text3')}
                          />
                      <Registrcard 
                           img={img2}
                           name={t('registr.text4')}
                           text={t('registr.text5')}
                           price={t('registr.text6')}
                           />
                      <Registrcard
                           img={img3}
                           name={t('registr.text7')}
                           text={t('registr.text8')}
                           price={t('registr.text9')}

                           />
                      
                  </div>
             </div>
          </div>
    </div>
  )
}
