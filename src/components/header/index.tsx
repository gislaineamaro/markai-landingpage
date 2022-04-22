import React from 'react'
import headerStyle from './style.module.scss'
import logo from '../../assets/Markai.svg'
import { BtnCommon } from '../btnCommon'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.logo}>
        <img
          className={headerStyle.logo__icon}
          onClick={handleClick}
          src={logo}
          alt="Logo da empresa"
        />
      </div>
      <nav className={headerStyle.navbar}>
        <ul className={headerStyle.nav__list}>
          <li className={headerStyle.nav__item}>
            <a>Features</a>
          </li>
          <li className={headerStyle.nav__item}>
            <a>Products</a>
          </li>
          <li className={headerStyle.nav__item}>
            <a>Company</a>
          </li>
          <li className={headerStyle.nav__item}>
            <a>Pricing</a>
          </li>
          <li className={headerStyle.nav__item}>
            <a>Support</a>
          </li>
        </ul>
      </nav>
      <div className={headerStyle.user__actions}>
        <a className={headerStyle.user__actions__login} href=".">
          Login
        </a>
        <BtnCommon text="Register" isIconHidden={true} />
      </div>
    </header>
  )
}
