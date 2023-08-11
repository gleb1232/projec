import React, { useState } from 'react'
import logo from './images/logo.svg'
import { LiaTelegramPlane } from 'react-icons/lia';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';



const Header = () => {
    const [menuActive, setmenuActive] = useState(false)
    return (
        <>
            <header className="header ">

                < div className="header__wrapper " >
                    <div className="container m-0  flex items-center ">
                        <div className="header__logo flex-[0_1_10.3125rem] ">
                            <img src={logo} alt="" />
                            <p className='mt-2 text-[.625rem] text-[#E4E5EA]'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                        </div>
                        <nav className={menuActive ? 'menu active' : "menu flex-auto "}>
                            <ul className='flex flex-wrap gap-x-[1.875rem]'>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Услуги</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Виджеты</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Интеграции</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem]  hover_link' href="home">Кейсы</a></li>
                                <li className='flex py-5 last_li_hidden'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Сертификаты</a></li>
                            </ul>
                        </nav>
                        <div className="text-[#A3A3A3] text-2xl flex flex-wrap gap-3 header__content">
                            <button className='text-[#E4E5EA] text-[1rem]'>+7 555 555-55-55</button>
                            <div className="flex gap-x-[1.875rem] pl-[2.9375rem] items-center">
                                <LiaTelegramPlane className='text-[#E4E5EA] text-[1.25rem]'></LiaTelegramPlane>
                                <BsFillTelephoneFill className='text-[#E4E5EA] text-[1.25rem]'></BsFillTelephoneFill>
                                <AiOutlineWhatsApp className='text-[#E4E5EA] text-[1.25rem]'></AiOutlineWhatsApp>
                            </div>
                        </div>

                    </div>


                </div>
            </header >
        </>
    );
}
export default Header