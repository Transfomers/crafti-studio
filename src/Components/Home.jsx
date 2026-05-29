
import Banner from './Home/Banner';
import Marque from './Home/Marque';
import img1 from '../assets/TLOGO.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SecondTitle from './Home/SecondTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ThiredTitle from './Home/ThiredTitle';
import { Skiper17 } from './Home/Skiper17';
import HomeProcess from './Home/HomeProcess';
import Philosophy from './Home/Philosopy';
import Project from './Home/Project';
import { CustomEase } from "gsap/CustomEase";
import HomeContact from './HomeContact';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from 'react';



const Home = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(CustomEase);
  gsap.registerPlugin(ScrollTrigger)
const showReelsRef = useRef(null);
const scrollToShowReels = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: "#show-reels",
        offsetY: 80, // if navbar fixed
      },
      ease: "power3.inOut",
    });
  };

  useGSAP(() => {
    CustomEase.create("myEase", "0.7, 0, 0.84, 0");
    gsap.to('#intro-logo', {
      scale: 70,
      opacity: 1,
      scrollTrigger: {
        trigger: '#intro-section',
        start: 'top top',
        end: '+=130%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        refreshPriority: -1, 
        markers: false,
        onLeave: () => {
          gsap.set('#intro-logo', { display: 'none' })
        },
        onEnterBack: () => {
          gsap.set('#intro-logo', { display: 'block' })
        }
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#navtrigger',
        start: 'top top',
        end: 'top 7%',
        markers: false,
      }
    });

    // All animations in sequence
    tl.from('.navlinks-li', {
      y: -100,
      delay: 0.4,
      opacity: 0,
      ease: 'power2.in',
      duration: 0.6
    });
    tl.from('#nav-close-btn', {
      y: -100,
      opacity: 0,

      duration: 0.6
    }, "-=0.4");
    tl.from('#showreels-btn', {
      y: 100,
      opacity: 0,
      ease: 'power2.in',
      duration: 0.6
    }, "-=0.4");
    tl.from('#banner-whatapp-icon', {
      x: 50,
      opacity: 0,
      ease: 'power2.in',
      duration: 0.3
    },);
    tl.from('#banner-text-effect', {
      x: -50,
      opacity: 0,
      ease: 'power2.in',
      duration: 0.3
    }, "-=0.3");


  })

  return (
    <div className='relative'>
      {/* PINNED SECTION */}
      <section
        id="intro-section"
        className="relative h-screen overflow-hidden"
      >
        <div
          id="intro-logo"
          className="absolute inset-0 h-full w-full flex items-center justify-center bg-black z-20 select-none pointer-events-none"
        >
          <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow-filter-home" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Outer broken circular C ring in solid white */}
            <path
              d="M 95 35 A 65 65 0 1 0 160 100 H 135 A 40 40 0 1 1 95 60 V 35 Z"
              fill="#ffffff"
            />
            {/* Top right corner arrowhead segment in solid crimson red with premium glow */}
            <path
              d="M 108 35 H 160 V 87 L 142 87 C 142 74 126 54 108 54 Z"
              fill="#ff2a35"
              filter="url(#glow-filter-home)"
            />
          </svg>
        </div>


        <Banner onShowReelsClick={scrollToShowReels} />
      </section>
      <div id='navtrigger' className=' h-60 w-60 absolute top-20'></div>

      {/* NORMAL SCROLL AFTER */}

      <ThiredTitle></ThiredTitle>



      <SecondTitle />
      <Philosophy></Philosophy>

      {/* <SkiperVideo></SkiperVideo> */}

      <Skiper17 ref={showReelsRef}></Skiper17>

      <Project></Project>

      <HomeProcess />
      <Marque></Marque>

      <HomeContact></HomeContact>

    </div>
  )
}

export default Home
