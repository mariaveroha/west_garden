import { useState } from 'react'
import s from '../styles/Featured.module.css'
import Card from './Card'
import clear from '../public/images/clear.svg'
const Featured = () => {
    const [card, setCard] = useState ([
        {id: 1, pic: clear, name: 'Готовый дизайн-проект', text : 'Воспользуйтесь возможностью сразу же заняться меблировкой и благоустройством новой квартиры, как только получите ключи'},
        {id: 2,  pic: clear,  name: 'Чистота и тишина, без шума и пыли', text : 'Забудьте шум от «бесконечного ремонта» соседей и лифт, декорированный защитными материалами'},
        {id: 3,  pic: clear ,  name: 'Выгода за счет оптовых закупок', text : 'Благодаря оптовым закупкам застройщика, вы получаете возможность сэкономить на стоимости ремонта'},
    ])
    return (
        <div  id = 'end' className={s.featured}>
            <p className={s.title}>Отделка от застройщика</p>
            <div className={s.cards}>
            {card.map(el => 
            <Card card = {el} key = {el.id}/>
            )}
            </div>
          
        </div>
    )
}

export default Featured