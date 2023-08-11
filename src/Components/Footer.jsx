import React from 'react'
import { LiaTelegramPlane } from 'react-icons/lia';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer mt-9    z-40 mb-[1.25rem]'>
            <div className="container m-0">
                <div className="inline-grid lg:grid-cols-6 lg:grid-rows-1  grid-cols-2  grid-rows-3">
                    <div className="flex flex-col lg:row-auto lg:justify-start lg:col-span-1  row-span-1 col-span-2 justify-center mb-[1.875rem]">
                        <button className='text-[#656566] text-[.875rem] font-bold uppercase mb-[1.25rem] text-left' >О компании</button>
                        <div className="flex flex-col gap-y-[.625rem] items-start">
                            <button className='footer__label'>Партнёрская программа</button>
                            <button className='footer__label '>Вакансии</button>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex row-span-1 col-span-2">
                        <div className="flex flex-col lg:ml-8 mb-[1.25rem]">
                            <div className="flex flex-col ">
                                <button className='text-[#656566] text-[.875rem]  font-bold uppercase text-left mb-[1.25rem]'>Меню</button>
                                <div className="flex items-center gap-x-[3.25rem]">
                                    <div className="gap-y-[.625rem] flex flex-col items-start">
                                        <button className='footer__label'> Расчёт стоимости</button>
                                        <button className='footer__label'>Услуги</button>
                                        <button className='footer__label'>Виджеты</button>
                                        <button className='footer__label'>Интеграции</button>
                                        <button className='footer__label'>Наши клиенты</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[.625rem] items-start ">
                                        <button className='footer__label'>Кейсы</button>
                                        <button className='footer__label'>Благодарственные письма</button>
                                        <button className='footer__label'>Сертификаты</button>
                                        <button className='footer__label'>Блог на Youtube</button>
                                        <button className='footer__label'>Вопрос / Ответ</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col lg:col-span-3 lg:items-end items-start row-span-1 col-span-2">
                        <button className='text-[#656566] text-[.875rem] font-bold uppercase mb-[1.25rem]'>Контакты</button>
                        <div className="flex flex-col gap-y-[1.625rem] lg:items-end items-start">
                            <button className='footer__label'>+7 555 555-55-55</button>
                            <div className="flex gap-x-[1.875rem] pl-[2.9375rem] items-center">
                                <LiaTelegramPlane className='text-[#E4E5EA] text-[1.25rem]'></LiaTelegramPlane>
                                <BsFillTelephoneFill className='text-[#E4E5EA] text-[1.25rem]'></BsFillTelephoneFill>
                                <AiOutlineWhatsApp className='text-[#E4E5EA] text-[1.25rem]'></AiOutlineWhatsApp>
                            </div>
                            <button className='footer__label'>Москва, Путевой проезд 3с1, к 902</button>
                            <div className="mt-[3.375rem] flex flex-col lg:items-end ">
                                <button className='footer__label'>©WELBEX 2022. Все права защищены.</button>
                                <button className='footer__label'>Политика конфиденциальности</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* align-self: flex-start; */}
                {/* align-items: end; */}

            </div>
        </footer>
    )
}

export default Footer