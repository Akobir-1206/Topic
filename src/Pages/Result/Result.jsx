import React, { useState } from 'react'
import '../Result/Result.css'
import Marquee from "react-fast-marquee";
import sertif from '../../assets/sertif.svg'
import axios from 'axios';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
export default function Result() {
    const {t, i18n} = useTranslation();
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
        <div className='result' id='result'>
            <div className="container">
                <div className="result__container">
                    <h1 className='result__name'>{t('result.text')}</h1>
                    <Marquee speed={100}>
                        <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <Marquee speed={100} direction='right'>
                        <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <button className='result__btn' onClick={openModal}>{t('result.text1')}</button>
                </div>
                <Modal title='' open={open} footer={null} onCancel={closeModal}>
                <form action="" onSubmit={SendMessage}>
                    <h1 className='registrmodal__title'>{t('modal.text')}</h1>
                    <p className='registrmodal__text'>{t('modal.text1')}</p>
                    <input className='question__name' type="text" id='name' placeholder={t('modal.text2')} required />
                    <input className='question__number' type="number" name="" id="number" placeholder='+998' required />
                    <button type='submit' loading={loading} className='question__btn' >{loading ? "Yuborilmoqda..." : "ARIZA QOLDIRISH"}</button>
                </form>
                </Modal>
            </div>
        </div>
    )
}
