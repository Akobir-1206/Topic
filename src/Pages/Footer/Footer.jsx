import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/footer.svg'
import phone from '../../assets/phone.png'
import teleg from '../../assets/teleg.svg'
import insta from '../../assets/insta.svg'
import youtube from '../../assets/youtube.svg'
export default function Footer() {
  return (
    <div className='footer'>
         <div className="container">
              <div className="footer__container">
                   <ul className='footer__leftlist'>
                      <img className='footer__logo' src={logo} alt="" />
                   </ul>
                   <ul className='footer__centerlist'>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#">Nega biz</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#">Natijalar</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#">Savollar</a></li>
                        <li className='footer__centeritem'><a className='footer__centerlink' href="#">Kurslar</a></li>
                   </ul>
                   <ul className='footer__righlist'>
                      <li className='footer__rightitem'><img src={phone} alt="" /></li>
                      <li className='footer__rightitem'><img src={teleg} alt="" /></li>
                      <li className='footer__rightitem  '><img src={insta} alt="" /></li>
                      <li className='footer__rightitem'><img src={youtube} alt="" /></li>
                   </ul>
              </div>
         </div>
    </div>
  )
}
