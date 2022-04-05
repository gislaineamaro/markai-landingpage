import React, { useState } from 'react'

import { BtnCommon } from '../../../../components/btnCommon'

import './style.scss'

interface ICardBenefitsProps {
  subtitle: string
  title: string
  description: string
  image: string
  isImagePositionLeft: boolean
}

export const CardBenefits = ({ subtitle, title, description, image, isImagePositionLeft}: ICardBenefitsProps) => {
  const isRenderImage = useState(isImagePositionLeft)
  return(
    <>
      {isRenderImage ? (
        <div className="card__content">
          <div className='verticalLine'/>
          <div className="card__infos">
            <p className="card__subtitle">{subtitle}</p>
            <h5 className="card__title">{title}</h5>
            <p className="card__body">{description}</p>
            <BtnCommon text="Learn more.." isIconHidden={true} />
          </div>
          <img className="card__image" src={image} />
        </ div>
      ) : (
        <div className="card__content--left">
          <img className="card__image--left" src={image} />
          <div className="card__box">
            <div className='verticalLine'/>
            <div className="card__infos--left">
              <p className="card__subtitle">{subtitle}</p>
              <h5 className="card__title">{title}</h5>
              <p className="card__body">{description}</p>
              <div className="card__button">
                <BtnCommon text="Learn more.." isIconHidden={true} />
              </div>
            </div>
          </div>
        </div>
      ) }
    </>
  )
}