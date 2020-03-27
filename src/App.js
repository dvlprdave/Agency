import React, { useEffect }from "react";
import gsap from 'gsap';
import "./styles/App.scss";

import Header from './components/header';
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // Prevents text flash on load
    gsap.to('body', 0, {
      css: { visibility: 'visible' }
    } )

    // GSAP Timeline
    const tl = gsap.timeline()
    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      sewY: 7,
      stagger: { amount: 0.3 }
    }).to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    

  }, [])

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;