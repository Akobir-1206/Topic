import React, { useState } from 'react'
import '../About/About.css'
import Aboutcard from '../../Cards/Aboutcard/aboutcard'
import sms from '../../assets/sms.svg'
import rocket from '../../assets/rocket.svg'
import money from '../../assets/money.svg'
import sumka from '../../assets/sumka.svg'
import arrow from '../../assets/arrow.svg'
import key from '../../assets/key.svg'
import axios from 'axios';
import { Modal } from 'antd'



export default function About() {

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const closeModal = () => {
      setOpen(false);
  };

  const openModal = () => {
      setOpen(true);
  };

  const SendMessage = (event) => {
      setLoading(true)
      event.preventDefault();
      const token = "7211372462:AAEvugEyka93jnYHnQp8cDw1UiUHPRPvKQ4";
      const chat_id = 5251998194;
      const url = `https://api.telegram.org/bot${token}/SendMessage`;
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const messageContent = `Ismi: ${name} \nRaqami: ${number}`
      axios({
          url: url,
          method: 'POST',
          data: {
              "chat_id": chat_id,
              "text": messageContent,
          }
      }).then((res) => {
          document.getElementById("myForm").reset()
          alert("Muvaffaqiyatli yuborildi")

      }).catch((error) => {
          console.log("Xatolik", error);

      }).finally(() => {
          setLoading(false)
          closeModal(true)
      })
  }

  return (
    <div className='about'> 
       <div className="container">
            <div className="about__container">
                 <h1 className='about__name'>TOPIK academy aniq siz uchun agar siz:</h1>
                 <div className="about__cards">
                    <Aboutcard  img={sms} about="Qisqa muddat ichida Koreys tilida gapirishni istaysiz"  />
                    <Aboutcard  img={rocket} about="Koreys tili o’rganib o’z karyerangizni qurmoqchisiz"/>
                    <Aboutcard  img={money} about="Topik sertifikatini olib Koreyaning nufuzli universitetlariga GRANT yutmoqchisiz"/>
                    <Aboutcard  img={sumka} about="Janubiy Koreya davlatida o’qish va ishlash uchun ketmoqchisiz"/>
                    <Aboutcard  img={arrow} about="Koreys tilini o’rta darajda bilasiz va darajangizni oshirmoqchisiz"/>
                    <Aboutcard  img={key} about="Ko’p yillardan buyon o’qib ham natijaga chiqa olmayapsiz"/>
                 </div>
                 <button className='about__button' onClick={openModal}>Ha, Bu Men</button>
            </div>
       </div>
       <Modal title='' open={open} footer={null} onCancel={closeModal}>
                    <form action="">
                        <h1 className='registrmodal__title'>Intensive</h1>
                        <p className='registrmodal__text'>Bepul darsga o'z joyingizni band qilish uchun ma'lumotlaringizni qoldiring va biz siz bilan tez orada bog'lanamiz</p>
                    </form>
                    <input className='question__name' type="text" id='name' placeholder='Ismingiz' required />
                    <input className='question__number' type="number" name="" id="number" placeholder='+998' />
                    <button type='submit' loading={loading} className='question__btn' onClick={SendMessage}>{loading ? "Yuborilmoqda..." : "ARIZA QOLDIRISH"}</button>
                </Modal>
    </div>
  )
}
