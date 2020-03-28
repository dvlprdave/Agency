import React, { useEffect }from "react";
import {Route} from 'react-router-dom'
import gsap from 'gsap';
import "./styles/App.scss";

import Header from './components/header';

// Route Pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  {path: '/approach', name: 'Approach', Component: Approach},
  {path: '/services', name: 'Services', Component: Services},
  {path: '/about-us', name: 'About Us', Component: About}
]

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // Prevents text flash on load
    // Placed here rather than body to cover full page
    gsap.to('body', 0, {
      css: { visibility: 'visible' }
    } )

  }, [])

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
    </>
  );
}

export default App;