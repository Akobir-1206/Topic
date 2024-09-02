import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/footer.svg'
import rasm1 from '../../assets/footer1.jpg'
import rasm2 from '../../assets/footer2.jpg'
import rasm3 from '../../assets/footer3.jpg'
import rasm4 from '../../assets/teg.png'
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
                      <li className='footer__rightitem'><img src={rasm1} alt="" /></li>
                      <li className='footer__rightitem'><img src={rasm2} alt="" /></li>
                      <li className='footer__rightitem  '><img src={rasm3} alt="" /></li>
                      <li className='footer__rightitem'><img src={rasm4} alt="" /></li>
                   </ul>
              </div>
         </div>
    </div>
  )
}
