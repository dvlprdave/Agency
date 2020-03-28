import React, { useEffect, useState }from "react";

import gsapAnimations from './../gsap';

import IntroOverlay from './../components/introOverlay';
import Banner from './../components/banner';
import Cases from './../components/cases';

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => setAnimationComplete(true)

  useEffect(() => {
    gsapAnimations(completeAnimation)
  }, [])

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : null }
      <Banner />
      <Cases />
    </>
  )
}

export default Home
