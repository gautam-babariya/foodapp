import React from 'react'
import './Header.css'
import companyLogo from './accets/logo.svg'
import Accounticon from './accets/acount_icon.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top" id="navbar-id">
        <div className="container-fluid">
          <img id="companylogo-id" src={companyLogo} alt="BigCo Inc. logo" />
          <a className="navbar-brand" id="navbar-brand-id">Fucker hungry</a>
          <div id="adjustacounticon-id">
            <img id="acounticon-id" src={Accounticon} alt="BigCo Inc. logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" id="navbar-toggler-icon-id"></span>
            </button>
          </div>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header" id="offcanvas-header-id">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Pizza</h5>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active black" id="nac-item-id" aria-current="page" href="#">Onion pizza</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link black" href="#">desi pi</a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-header" id="offcanvas-header-id">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Burger</h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
