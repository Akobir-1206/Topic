import React, { useState } from 'react';
import '../Registrcard/Registrcard.css';
import { message, Modal } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Registrcard(props) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState('+998 '); 
  const { t, i18n } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage(); // Bu yerda `messageApi` va `contextHolder` ni chaqiramiz

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleNumberChange = (event) => {
    let inputValue = event.target.value;

    if (!inputValue.startsWith('+998 ')) {
      inputValue = '+998 ' + inputValue.replace('+998 ', '');
    }

    const maxLength = 12; 
    if (inputValue.length <= maxLength) {
      setNumber(inputValue);
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: t('Muvaffaqiyatli yuborildi'), // Ant Design success xabarini ko'rsatish
      duration: 5,
    });
  };

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7211372462:AAEvugEyka93jnYHnQp8cDw1UiUHPRPvKQ4"; 
    const chat_id = 5251998194;
    const url = `https://api.telegram.org/bot${token}/SendMessage`;
    const name = document.getElementById("name").value;
    const messageContent = `Ismi: ${name} \nRaqami: ${number}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": messageContent,
      }
    }).then((res) => {
      setNumber('+998 '); 
      document.getElementById("name").value = ''; 
      success(); // Xabar muvaffaqiyatli yuborilganda xabarni ko'rsatish
    }).catch((error) => {
      console.log("Xatolik", error);
    }).finally(() => {
      setLoading(false);
      closeModal();
    });
  };

  return (
    <div className='registrcard'>
      {contextHolder} {/* Context holderni bu yerda ishlatishingiz kerak */}
      <div className="registrcard__container">
        <img className='registrcard__img' src={props.img} alt="" />
        <ul className='registrcard__list'>
          <li className='registrcard__item'><h3 className='registrcard__name'>{props.name}</h3></li>
          <li className='registrcard__item'><button className='registrcard__btn'>{t('registr.text10')}</button></li>
        </ul>
        <p className='registrcard__text'>{props.text}</p>
        <ul className='registrcard__secondlist'>
          <li className='registrcard__seconditem'><button className='registrcard__button' onClick={openModal}>{t('registr.text11')}</button></li>
          <li className='registrcard__seconditem'><p className='registrcard__price'>{props.price}</p></li>
        </ul>
      </div>
      <Modal className='modalreg' title='' open={open} footer={null} onCancel={closeModal}>
        <form id='myForm' action="" onSubmit={SendMessage}>
          <h1 className='registrmodal__title'>{t('modal.text')}</h1>
          <p className='registrmodal__text'>{t('modal.text1')}</p>
          <input className='form__name' type="text" id='name' placeholder={t('modal.text2')} required />
          <input
            className='form__number'
            type="text"
            id="number"
            value={number}
            onChange={handleNumberChange}
            placeholder='+998'
            required
          />
          <button   type='submit' loading={loading} className='form__btn'>
            {loading ? t('ques.text4') : t('ques.text3')}
          </button>
        </form>
      </Modal>
    </div>
  );
}
