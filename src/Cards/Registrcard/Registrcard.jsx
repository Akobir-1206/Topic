import React, { useState } from 'react'
import '../Registrcard/Registrcard.css'
import { Modal } from 'antd';

import axios from 'axios';
export default function Registrcard(props) {

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
    <div className='registrcard'>
      <div className="registrcard__container">
        <img className='registrcard__img' src={props.img} alt="" />
        <ul className='registrcard__list'>
          <li className='registrcard__item'><h3 className='registrcard__name'>{props.name}</h3></li>
          <li className='registrcard__item'><button className='registrcard__btn'>Davomiyligi: 5 oy</button></li>
        </ul>
        <p className='registrcard__text'>{props.text}</p>
        <ul className='registrcard__secondlist'>
          <li className='registrcard__seconditem'><button className='registrcard__button' onClick={openModal}>Ro’yxatdan o’tish</button></li>
          <li className='registrcard__seconditem'><p className='registrcard__price'>{props.price}</p></li>
        </ul>
      </div>
      <Modal title='' open={open} footer={null} onCancel={closeModal}>
        <form action="">
          <h1 className='registrmodal__title'>Intensive</h1>
          <p className='registrmodal__text'>Bepul darsga o'z joyingizni band qilish uchun ma'lumotlaringizni qoldiring va biz siz bilan tez orada bog'lanamiz</p>
        </form>
        <input className='question__name' type="text" id='name' placeholder='Ismingiz' required />
        <input className='question__number' type="number" name="" id="number" placeholder='+998' />
        <button type='submit' loading={loading} className='question__btn'onClick={SendMessage}>{loading?"Yuborilmoqda...":"ARIZA QOLDIRISH"}</button>
      </Modal>
    </div>
  )
}
