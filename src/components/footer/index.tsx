import React from 'react'

import { BtnCommon } from '../btnCommon'

import './style.scss'
import arrowIcon from '../../assets/Arrow.svg'
import radialLogo from '../../assets/MarkaiLogo.svg'
import iconLinkedin from "../../assets/linkedin.svg"
import iconFacebook from "../../assets/facebook.svg"
import iconCb from "../../assets/cb.svg"
import iconInstagram from "../../assets/instagram.svg"
import iconTwitter from "../../assets/twitter.svg"

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__columns">
        <div className="footer__column--one">
          <img
            className="logoEmpresa"
            src={radialLogo}
            alt="Logo da Empresa"
          />
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque.
          </p>
          <BtnCommon text="Let's go" icon={arrowIcon} isIconHidden={true} />
          <div className="social__midia">
            <img
              className="social__midia--icon"
              src={iconLinkedin}
              alt="Linkedin"
            />
            <img
              className="social__midia--icon"
              src={iconFacebook}
              alt="Facebook"
            />
            <img
              className="social__midia--icon"
              src={iconCb}
              alt="Cb"
            />
            <img
              className="social__midia--icon"
              src={iconInstagram}
              alt="Instagram"
            />
            <img
              className="social__midia--icon"
              src={iconTwitter}
              alt="Twitter"
            />
          </div>
        </div>
        <div className="footer__column--two">
          <ul className='links__list'>
            <a href=".">Site</a>
            <li>Features</li>
            <li>Products</li>
            <li>Company</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
