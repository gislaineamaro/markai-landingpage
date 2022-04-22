import React, { useState } from 'react'

import { BtnCommon } from '../btnCommon'

import cardBenefitStyle from './style.module.scss'

interface ICardBenefitsProps {
  subtitle: string
  title: string
  description: string
  image: string
  isImagePositionLeft: boolean
}

export const CardBenefits = ({
  subtitle,
  title,
  description,
  image,
  isImagePositionLeft
}: ICardBenefitsProps) => {
  const [isRenderImage, setIsRenderImage] = useState(isImagePositionLeft)
  return (
    <>
      {isRenderImage ? (
        <div className={cardBenefitStyle.card__content}>
          <div className={cardBenefitStyle.verticalLine} />
          <div className={cardBenefitStyle.card__infos}>
            <p className={cardBenefitStyle.card__subtitle}>{subtitle}</p>
            <h5 className={cardBenefitStyle.card__title}>{title}</h5>
            <p className={cardBenefitStyle.card__body}>{description}</p>
            <BtnCommon text="Learn more.." isIconHidden={true} />
          </div>
          <img className={cardBenefitStyle.card__image} src={image} />
        </div>
      ) : (
        <div className={cardBenefitStyle.card__content__left}>
          <img className={cardBenefitStyle.card__image__left} src={image} />
          <div className={cardBenefitStyle.card__box}>
            <div className={cardBenefitStyle.verticalLine} />
            <div className={cardBenefitStyle.card__infos__left}>
              <p className={cardBenefitStyle.card__subtitle}>{subtitle}</p>
              <h5 className={cardBenefitStyle.card__title}>{title}</h5>
              <p className={cardBenefitStyle.card__body}>{description}</p>
              <div className={cardBenefitStyle.card__button}>
                <BtnCommon text="Learn more.." isIconHidden={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
