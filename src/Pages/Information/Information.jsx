import React from 'react'
import '../Information/Information.css'
import Informationcard from '../../Cards/Informationcard/Informationcard'
import { useTranslation } from 'react-i18next';
export default function Information() {
    const {t, i18n} = useTranslation();
    return (
        <div className='information' id='info'>
            <div className="container">
                <div className="information__container">
                    <h1 className='information__title'>{t('info.text')}</h1>

                    <div className="information__card">
                        <div className="divv">
                        <Informationcard
                            number={"01"}
                            name={t('info.text1')}
                            text={t('info.text2')}
                        />
                        </div>
                        <Informationcard
                            number={"02"}
                            name={t('info.text3')}
                            text={t('info.text4')}
                        />
                        <Informationcard
                            number={"03"}
                            name={t('info.text5')}
                            text={t('info.text6')}
                        />
                        <Informationcard
                            number={"04"}
                            name={t('info.text7')}
                            text={t('info.text8')}
                        />
                        <Informationcard
                            number={"05"}
                            name={t('info.text9')}
                            text={t('info.text10')}
                        />
                        <Informationcard
                            number={"06"}
                            name={t('info.text11')}
                            text={t('info.text12')}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
