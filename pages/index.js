import About from 'components/About'
import Featured from 'components/Featured'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Header from 'components/Header'
import s from '../styles/Home.module.css'
import Offer from 'components/Offer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useRef } from 'react'
import ScrollTriggerProxy from 'components/ScrollTriggerProxy'
import Mask from 'components/Mask'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"




export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <ScrollTriggerProxy/>
      <main data-scroll-container ref={containerRef} className={s.main} id ='App'>
        <div className={s.mainContainer} id='mainContainer'>
          <div id='smallContainer'>
            <Header />
            <Mask/>
            <Gallery />
          </div>
          <Featured />
          <About />
          <Offer />
          <Footer />
        </div>
      </main>
    </LocomotiveScrollProvider>

  )
}
