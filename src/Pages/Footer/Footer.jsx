import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/footer.svg'
import rasm1 from '../../assets/phone.png'
import rasm2 from '../../assets/tg.png'
import rasm3 from '../../assets/insta.png'
import rasm4 from '../../assets/youtube.png'

import { useTranslation } from 'react-i18next'
export default function Footer() {
     const {t, i18n} = useTranslation();
  return (
    <div className='footer'>
         <div className="container">
              <div className="footer__container">
                   <ul className='footer__leftlist'>
                      <img className='footer__logo' src={logo} alt="" />
                   </ul>
                   <ul className='footer__centerlist'>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#info">{t('navbar.text1')}</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#result">{t('navbar.text2')}</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#kurs">{t('navbar.text3')}</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#question">{t('navbar.text4')}</a></li>
                   </ul>
                   <ul className='footer__righlist'>
                      <li className='footer__rightitem'><a href="tel:+998935531206"><img src={rasm1} alt="" /></a></li>
                      <li className='footer__rightitem'><a href="https://www.telegram.org/@akobirr777"><img src={rasm2} alt="" /></a></li>
                      <li className='footer__rightitem'><a href="https://www.instagram.com/_akob1r_/"><img src={rasm3} alt="" /></a></li>
                      <li className='footer__rightitem'><a href="https://youtube.com/@it-time-academy?si=fPDovQBKknMMdcNk"><img src={rasm4} alt="" /></a></li>
                   </ul>
              </div>
         </div>
    </div>
  )
}
