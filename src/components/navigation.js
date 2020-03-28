import React from 'react'
import {NavLink} from 'react-router-dom'


function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to='/case-studies' exact>Case Studies</NavLink>
                <NavLink to='/approach' exact>Approach</NavLink>
                <NavLink to='/services' exact>Services</NavLink>
                <NavLink to='/about-us' exact>About Us</NavLink>
              </li>
            </ul>
        </div>
        <div className="nav-column">
          <div className="nav-label">Contact</div>
          <div className="nav-infos">
            {/* NAV INFOS */}
            <ul className="nav-info">
              <li className="nav-info-label">Email</li>
              <li>
              <NavLink to='/contact' exact>Get in touch with us</NavLink>
              </li>
              <li>
              <NavLink to='/audit' exact>Get a free audit</NavLink>
              </li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Headquarters</li>
              <li>Route du Jura 49</li>
              <li>1700 Fribourg</li>
              <li>Swotzerland</li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Phone</li>
              <li>+41 (0) 88 810 22 70</li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Legal</li>
              <li>Privacy and Cookies</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navigation
