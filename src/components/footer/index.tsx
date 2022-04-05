import React from 'react'

import { BtnCommon } from '../btnCommon'

import './style.scss'
import arrowIcon from '../../assets/Arrow.svg'
import radialLogo from '../../assets/MarkaiLogo.svg'
import iconLinkedin from '../../assets/linkedin.svg'
import iconFacebook from '../../assets/facebook.svg'
import iconCb from '../../assets/cb.svg'
import iconInstagram from '../../assets/instagram.svg'
import iconTwitter from '../../assets/twitter.svg'

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__columns">
        <div className="footer__column--one">
          <div className="footer__cta">
            <img
              className="logoEmpresa"
              src={radialLogo}
              alt="Logo da Empresa"
            />
            <p className="cta__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam sit scelerisque enim in sed diam nec, blandit. Amet tellus
              massa sed iaculis. Mauris, curabitur scelerisque.
            </p>
            <BtnCommon text="Let's go" icon={arrowIcon} isIconHidden={false} />
            <div className="social__media">
              <img
                className="social__media--icon"
                src={iconLinkedin}
                alt="Linkedin"
              />
              <img
                className="social__media--icon"
                src={iconFacebook}
                alt="Facebook"
              />
              <img className="social__media--icon" src={iconCb} alt="Cb" />
              <img
                className="social__media--icon"
                src={iconInstagram}
                alt="Instagram"
              />
              <img
                className="social__media--icon"
                src={iconTwitter}
                alt="Twitter"
              />
            </div>
          </div>
        </div>
        <div className="footer__column--two">
          <ul className="links__list">
            <p className="links__list--title">Site</p>
            <li className="links__list--item">Features</li>
            <li className="links__list--item">Products</li>
            <li className="links__list--item">Company</li>
            <li className="links__list--item">Pricing</li>
            <li className="links__list--item">Support</li>
          </ul>
          <ul className="links__list">
            <p className="links__list--title">Legale</p>
            <li className="links__list--item">Privacy e Policy</li>
            <li className="links__list--item">Terms & Condition</li>
            <li className="links__list--item">Company Police</li>
          </ul>
          <ul className="links__list">
            <p className="links__list--title">Company</p>
            <li className="links__list--item">About Us</li>
            <li className="links__list--item">Our Team</li>
            <li className="links__list--item">Our History</li>
            <li className="links__list--item">Career</li>
          </ul>
          <ul className="links__list">
            <p className="links__list--title">Fallow us one</p>
            <li className="links__list--item">Twitter</li>
            <li className="links__list--item">Facebook</li>
            <li className="links__list--item">Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
