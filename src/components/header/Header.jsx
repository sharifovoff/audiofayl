import {NavLink} from 'react-router-dom'


import './Header.css'

import siteLogo from '../../assets/logo.svg'
import shoppingIcon from '../../assets/shoppingicon.svg'


function Header() {
  let shopIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.519 13.195h-.001a.673.673 0 0 0-.682.66c0 .363.307.659.684.659h12.395c.378 0 .684.295.684.66 0 .364-.306.66-.684.66H7.52c-1.131 0-2.051-.889-2.051-1.98 0-.812.51-1.511 1.236-1.816L4.237 1.32H.684A.672.672 0 0 1 0 .66C0 .296.306 0 .684 0h4.101c.32 0 .598.215.668.517l.488 2.122H22.65c.214 0 .416.097.546.262.129.166.17.38.111.579l-2.734 9.236a.68.68 0 0 1-.658.478H7.52Zm1.231 2.638c1.149 0 2.083.935 2.083 2.084A2.086 2.086 0 0 1 8.75 20a2.086 2.086 0 0 1-2.083-2.083c0-1.15.934-2.084 2.083-2.084Zm10 0c1.149 0 2.083.935 2.083 2.084A2.086 2.086 0 0 1 18.75 20a2.086 2.086 0 0 1-2.083-2.083c0-1.15.934-2.084 2.083-2.084Zm.65-3.958 2.344-7.917h-15.5l1.824 7.917H19.4Zm-9.956 6.042a.695.695 0 1 0-1.39.001.695.695 0 0 0 1.39-.001Zm9.306-.695a.695.695 0 0 1 0 1.39.695.695 0 0 1 0-1.39Z" clip-rule="evenodd"/></svg>
  )
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink to="/" className="site-logo">
          <img src={siteLogo} alt="Audiofayl logog" width='143' height='25' className="site-logo__image" />
        </NavLink>

        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <NavLink to="/" className="sitenav__link">Home</NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/headphones" className="sitenav__link">HEADPHONES</NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/speakers" className="sitenav__link">SPEAKERS</NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/earphones" className="sitenav__link">EAROHONES</NavLink>
            </li>
          </ul>
        </nav>
        <button className="header__btn">
          {shopIcon}
        </button>
      </div>
        <div className="line"></div>
    </header>
  )
}

export default Header