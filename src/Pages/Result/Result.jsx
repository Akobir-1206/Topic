import React, { useState } from 'react'
import '../Result/Result.css'
import Marquee from "react-fast-marquee";
import sertif from '../../assets/sertif.svg'
import axios from 'axios';
import { Modal } from 'antd';
export default function Result() {

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
                    <h1 className='result__name'>O’quvchilarimizning natijalari TOPIK 6 gacha</h1>
                    <Marquee speed={100}>
                        <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <Marquee speed={100} direction='right'>
                        <div className="result__sertif"> <img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /><img className='result__img' src={sertif} alt="" /></div>
                    </Marquee>
                    <button className='result__btn' onClick={openModal}>ARIZA QOLDIRISH</button>
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
        </div>
    )
}
