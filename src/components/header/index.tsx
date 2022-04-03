import React from 'react'
import './style.scss'
import logo from '../../assets/Markai.svg'
import { BtnCommon } from '../btnCommon'

export const Header = () => {
  return(
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo da empresa"></img>
      </div>
      <div className="navbar">
        <ul className="nav__list">
          <li className="nav__item">Features</li>
          <li className="nav__item">Products</li>
          <li className="nav__item">Company</li>
          <li className="nav__item">Pricing</li>
          <li className="nav__item">Support</li>
        </ul>
      </div>
      <div className="user__actions">
        <a className="user__actions--login" href=".">Login</a>
        <BtnCommon text="Register" isIconHidden={true}/>
      </div>
    </header>
  )
}