import React, { useEffect, useState } from "react";
import { NavLink, withRouter} from "react-router-dom";

import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import { openMenu, closeMenu } from './../animations/navAnimations';

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false })

  useEffect(() => {

    history.listen(() => {
      setMenuState({menuState})
    })

    // Open / Close nav menu animaiton
    if (menuState.menuOpened === true ) {
      openMenu(dimensions.width)
    } else {
      closeMenu()
    }

  }, [menuState, setMenuState, dimensions.height, dimensions.width, history])

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' exact>
              AGENCY
            </NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({menuOpened: true})}
              className='hamburger-menu'
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className='hamburger-menu-close'
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);