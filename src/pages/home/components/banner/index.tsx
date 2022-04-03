import React from 'react'

import { BtnCommon } from '../../../../components/btnCommon'

import './style.scss'
import IconArrow from '../../../../assets/Arrow.svg'
import Arrow from '../../../../assets/ArrowBottom.svg'

export const Banner = () => {
  return (
    <>
      <div className="banner__callToAction">
        <h3 className="banner__text">Let Ai help your</h3>
        <h1 className="banner__text--title">Marketing team</h1>
        <p className="banner__text--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum condimentum viverra ornare. Gravida tellus ut
          venenatis.
        </p>
        <div className="banner__button">
          <BtnCommon text="Let's go!" icon={IconArrow} />
        </div>
        <div className="redirect__arrow">
          <img
            src={Arrow}
            alt="Seta para baixo"
            className="redirect__arrow--icon"
          />
        </div>
      </div>
    </>
  )
}
