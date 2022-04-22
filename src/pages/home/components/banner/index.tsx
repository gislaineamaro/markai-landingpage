import React from 'react'

import { BtnCommon } from '../../../../components/btnCommon'

import bannerSection from './style.module.scss'
import IconArrow from '../../../../assets/Arrow.svg'
import Arrow from '../../../../assets/ArrowBottom.svg'

export const Banner = () => {
  return (
    <>
      <div className={bannerSection.banner__callToAction}>
        <h3 className={bannerSection.banner__text}>Let Ai help your</h3>
        <h1 className={bannerSection.banner__text__title}>Marketing team</h1>
        <p className={bannerSection.banner__text__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum condimentum viverra ornare. Gravida tellus ut
          venenatis.
        </p>
        <div className={bannerSection.banner__button}>
          <BtnCommon text="Let's go!" icon={IconArrow} />
        </div>
        <div className={bannerSection.redirect__arrow}>
          <img
            src={Arrow}
            alt="Seta para baixo"
            className={bannerSection.redirect__arrow__icon}
          />
        </div>
      </div>
    </>
  )
}
