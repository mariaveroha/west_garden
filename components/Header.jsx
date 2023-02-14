import s from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import main from '../public/images/main.svg'
import mask from '../public/images/m1.png'
import { useEffect, useState } from 'react'
const Header = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                if (window.scrollY > 30) {
                    console.log(window.scrollY)
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            };

            window.addEventListener("scroll", () => handleScroll());
        }
    });

    return (
        <div className={s.header} id='head' data-scroll data-scroll-spped='2'>
            <div className={s.p} data-scroll data-scroll-sticky data-scroll-target='#mainContainer'>
                <Image src={main} className={s.back} />
            </div>

            <div className={s.headerContent} data-scroll data-scroll-sticky data-scroll-target='#mainContainer'>
                <div className={visible ? s.navbar + ' ' + s.bgColor : s.navbar}>
                    <div>О нас</div>
                    <div>Услуги</div>
                    <Image src={logo} width={50} height={50} />
                    <div>Контакты</div>
                    <div>Команда</div>
                </div>
            </div>
            <div className={s.mainName} data-scroll data-scroll-sticky data-scroll-target='#smallContainer'>
                <p className={s.title}> West Garden</p>
            </div>



        </div>

    )
}

export default Header