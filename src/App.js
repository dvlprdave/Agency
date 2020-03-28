// Modules
import React, { useEffect, useState }from "react";
import {Route} from 'react-router-dom'
import gsap from 'gsap';

// Styles
import "./styles/App.scss";

// Helper
import debounce from './helpers/debounce';

// Components
import Header from './components/header';
import Navigation from "./components/navigation";

// Route Pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

// Page Routes
const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  {path: '/approach', name: 'Approach', Component: Approach},
  {path: '/services', name: 'Services', Component: Services},
  {path: '/about-us', name: 'About Us', Component: About}
]

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {

    // Prevents text flash on load
    // Placed here rather than home to cover full page
    gsap.to('body', 0, {
      css: { visibility: 'visible' }
    } )


    // Viewport unit on mobile fix 
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ 
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // See debounce helper function ./helpers/debounce
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)

  }, [dimensions])

  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;