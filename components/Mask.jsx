import mask from '../public/images/m1.png'
import Image from 'next/image'
import s from '../styles/Mask.module.css'
const Mask = () => {
    return (
        <div className={s.maskContainer}>
            <div className={s.m} >
                <Image src={mask} className={s.mask} />
            </div>

            <div className={s.infoMask}>
                <p className={s.maskTitle}>Жизнь в West Garden  &#8594; &nbsp; &nbsp;  это</p>
                <p className={s.text}>Жизнь в зеленом оазисе в статусном районе Москвы.Жилой комплекс бизнес-класса в 20 минутах от Кремля. Наслаждайтесь изобилием деревьев и кустарников во дворе, никаких машин — только пустые тротуарные дорожки и обилие цветов и кустарников.</p>
            </div>
        </div>
    )
}

export default Mask