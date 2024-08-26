import React from 'react'
import '../Information/Information.css'
import Informationcard from '../../Cards/Informationcard/Informationcard'
export default function Information() {
    return (
        <div className='information' id='info'>
            <div className="container">
                <div className="information__container">
                    <h1 className='information__title'>Nima uchun aynan TOPIK academy?</h1>

                    <div className="information__card">
                        <div className="divv">
                        <Informationcard
                            number={"01"}
                            name={"Professional ustozlar"}
                            text={"Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi"}
                        />
                        </div>
                        <Informationcard
                            number={"02"}
                            name={"Bepul coworking zonalari"}
                            text={"Erkin dars qilish, netvorking va o’z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud"}
                        />
                        <Informationcard
                            number={"03"}
                            name={"Haftalik tadbirlar"}
                            text={"TOPIK acdemy jamoasi o’quvchilari uchun doimiy ravishda qo’shimcha tadbirar tashkilb keladi"}
                        />
                        <Informationcard
                            number={"04"}
                            name={"Bepul sinov imtihonlari"}
                            text={"Har davomida tashkillanadigan sinov imtihonlarida qatnashib o’z darajangizni bilib borasiz"}
                        />
                        <Informationcard
                            number={"05"}
                            name={"Yordamchi kuratorlar"}
                            text={"Darslarni o’zlashtirishda qiyinchilik bo’lsa sizga yordam beradigan kuratoringiz bo’ladi"}
                        />
                        <Informationcard
                            number={"06"}
                            name={"Konsulting xizmatlar"}
                            text={"Muvafaqqiyatli bitirgan talabalarimizga Janubiy Koreyada o’qish uchun visa olishda, universitet tanlash va grand yutishda yordam beramiz"}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
