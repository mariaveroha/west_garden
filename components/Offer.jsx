import s from '../styles/Offer.module.css'
import mask from '../public/images/m2.png'
import back from '../public/images/back.svg'
import Image from 'next/image'
const Offer = () => {

    return (
        <div id="stick" data-scroll data-scroll-spped='2'>
            <div className={s.p} data-scroll data-scroll-sticky data-scroll-target='#stick'>
                <Image src={back} className={s.back} />
            </div>
            <div className={s.m} >
                <Image src={mask} className={s.mask} />
            </div>
            <div className={s.infoMask}>
                <div className={s.blockText}>
                    <p className={s.offer}>Погрузитесь в мир будущего с современными архитектурными решениями</p>
                    <ul>
                        <li className= {s.item}>Проект создан архитектурной мастерской ATRIUM по дизайн-коду британских бюро LDA Design и UHA London</li>
                        <li className= {s.item}>Бионические фасады с эффектной подсветкой</li>
                        <li className= {s.item}>Современные высококачественные материалы строительства</li>
                        <li className= {s.item}> Продуманный функциональный дизайн</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Offer