import React, { useState } from 'react'
import '../Question/Question.css'
import axios from 'axios';
export default function Question() {
   const [loading,setLoading] = useState(false)


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

        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <div className='question' id='question'>
            <div className="container">
                <div className="question__container">
                    <ul className='question__list'>
                        <h1 className='question__title'>Savollaringiz qoldimi?</h1>
                        <p className='question__text'>Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
                    </ul>
                    <ul className='question__items'>
                        <form id="myForm" onSubmit={SendMessage}>
                            <li className='question__item'><input className='question__name' type="text" id='name' placeholder='                      Ismingiz' required /></li>
                            <li className='question__item'><input className='question__number' type="number" name="" id="number" placeholder='                     +998' /></li>
                            <li className='question__item'><button type='submit' loading={loading} className='question__btn'>{loading?"Yuborilmoqda...":"ARIZA QOLDIRISH"}</button></li>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
    )
}
