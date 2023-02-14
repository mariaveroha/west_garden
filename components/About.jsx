import Image from 'next/image'
import s from '../styles/About.module.css'
import centr from '../public/images/centr.svg'
import lift from '../public/images/lift.svg'
const About = () => {
    return (
        <div className={s.abotRealtive}>
          <div className={s.about}>
                <div className={s.info}>
                    <p className={s.title} data-scroll data-scroll-speed = '-2' data-scroll-direction='horizontal'>Современная эстетика лобби</p>
                    <p className={s.text} id='headline'>Центральные входные группы: зоны ожидания и встреч, пост охраны, переговорная комната, колясочная.   </p>
                    <p className={s.text} id='headline'> Лифтовый холл: 2-4 лифта, грузовые и пассажирские, ведущие производители</p>
                   
                </div>
                <Image data-scroll data-scroll-speed = '4' src={centr} width={600} height={650}  style = {{zIndex: '1'}}/>

            </div>
            <Image data-scroll data-scroll-speed = '-2' src={lift} width={490} height={600} style = {{position: 'absolute' , top: '20%' , left: '45%'}}/>
        </div>
          
    )
}

export default About