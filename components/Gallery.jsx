import s from '../styles/Gallery.module.css'
import Image from 'next/image'
import 'swiper/css';
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react';
import g1 from '../public/images/g1.jpg'
import highHouse from '../public/images/highHouse.jpg'
import parking from '../public/images/parking.jpg'
import g2 from '../public/images/g2.png'
import g3 from '../public/images/g3.png'
import g4 from '../public/images/g4.png'


const Gallery = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const horizontalRef = useRef(null)

const horizontSection = gsap.utils.toArray()

    useLayoutEffect(() => {
        let element = ref.current;

        let scrollingElement = horizontalRef.current;

        let pinWrapWidth = scrollingElement.offsetWidth
        // let pinWrapWidth = scrollingElement.clientWidth;
        // let horizontalScrollLength = pinWrapWidth - window.innerWidth;
        let t1 = gsap.timeline();


        setTimeout(() => { 
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '#App',
                     pin: true,
                    scrub: true,
                    markers: true
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none",
            })

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: `${pinWrapWidth} bottom`,
                    scroller: '#App',
                    scrub: true,
                    markers: true,
                   

                },
                x: -pinWrapWidth,
                ease: 'none'
            })

            ScrollTrigger.refresh()
        }, 1000)

        ScrollTrigger.refresh()
        return () => {

        };
    })

    return (
        <div className={s.gallery} ref={ref}>

            <div className={s.photos} ref={horizontalRef} >
                <div>
                    <Image src={g1} width={380} height={280} class = 'im' />
                    <Image src={g2} width={380} height={280}  class = 'im' />
                </div>
                <Image src={highHouse} width={480} height={568}  class = 'im'/>
                <div>
                    <Image src={g3} width={380} height={280}  class = 'im' />
                    <Image src={g4} width={380} height={280}  class = 'im' />
                </div>

                <Image src={parking} width={480} height={568}  class = 'im'/>
                <Image src={g1} width={480} height={380}  class = 'im'/>
                <Image src={g1} width={480} height={380}  class = 'im' />
                <Image src={g1} width={480} height={380}  class = 'im'/>
                <Image src={g1} width={480} height={380}  class = 'im' />
                <Image src={g1} width={480} height={380}  class = 'im'/>


            </div>


        </div>


    )
}

export default Gallery