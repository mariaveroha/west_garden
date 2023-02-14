import Image from 'next/image'
import s from '../styles/Card.module.css'
const Card = (props) => {
    return (
        <div data-scroll data-scroll-speed='2' className={s.card}>
            <Image src={props.card.pic} width={364} height={222} />
            <p className={s.name}>{props.card.name}</p>
            <p className={s.item}>{props.card.text}</p>
        </div>
    )
}

export default Card