import React from 'react'

import { BtnCommon } from '../btnCommon'

import footerStyle from './style.module.scss'
import arrowIcon from '../../assets/Arrow.svg'
import radialLogo from '../../assets/MarkaiLogo.svg'
import iconLinkedin from '../../assets/linkedin.svg'
import iconFacebook from '../../assets/facebook.svg'
import iconCb from '../../assets/cb.svg'
import iconInstagram from '../../assets/instagram.svg'
import iconTwitter from '../../assets/twitter.svg'

export const Footer = () => {
  return (
    <div className={footerStyle.footer__container}>
      <div className={footerStyle.footer__columns}>
        <div className={footerStyle.footer__column__one}>
          <div className={footerStyle.footer__cta}>
            <img
              className={footerStyle.logoEmpresa}
              src={radialLogo}
              alt="Logo da Empresa"
            />
            <p className={footerStyle.cta__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam sit scelerisque enim in sed diam nec, blandit. Amet tellus
              massa sed iaculis. Mauris, curabitur scelerisque.
            </p>
            <BtnCommon text="Let's go" icon={arrowIcon} isIconHidden={false} />
            <div className={footerStyle.social__media}>
              <img
                className={footerStyle.social__media__icon}
                src={iconLinkedin}
                alt="Linkedin"
              />
              <img
                className={footerStyle.social__media__icon}
                src={iconFacebook}
                alt="Facebook"
              />
              <img className={footerStyle.social__media__icon} src={iconCb} alt="Cb" />
              <img
                className={footerStyle.social__media__icon}
                src={iconInstagram}
                alt="Instagram"
              />
              <img
                className={footerStyle.social__media__icon}
                src={iconTwitter}
                alt="Twitter"
              />
            </div>
          </div>
        </div>
        <div className={footerStyle.footer__column__two}>
          <ul className={footerStyle.links__list}>
            <p className={footerStyle.links__list__title}>Site</p>
            <li className={footerStyle.links__list__item}>Features</li>
            <li className={footerStyle.links__list__item}>Products</li>
            <li className={footerStyle.links__list__item}>Company</li>
            <li className={footerStyle.links__list__item}>Pricing</li>
            <li className={footerStyle.links__list__item}>Support</li>
          </ul>
          <ul className={footerStyle.links__list}>
            <p className={footerStyle.links__list__title}>Legale</p>
            <li className={footerStyle.links__list__item}>Privacy e Policy</li>
            <li className={footerStyle.links__list__item}>Terms & Condition</li>
            <li className={footerStyle.links__list__item}>Company Police</li>
          </ul>
          <ul className={footerStyle.links__list}>
            <p className={footerStyle.links__list__title}>Company</p>
            <li className={footerStyle.links__list__item}>About Us</li>
            <li className={footerStyle.links__list__item}>Our Team</li>
            <li className={footerStyle.links__list__item}>Our History</li>
            <li className={footerStyle.links__list__item}>Career</li>
          </ul>
          <ul className={footerStyle.links__list}>
            <p className={footerStyle.links__list__title}>Fallow us one</p>
            <li className={footerStyle.links__list__item}>Twitter</li>
            <li className={footerStyle.links__list__item}>Facebook</li>
            <li className={footerStyle.links__list__item}>Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
