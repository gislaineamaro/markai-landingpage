import React from 'react'

import cardFeatureStyle from './style.module.scss'

interface ICardProps{
  image: string
  alt: string
  serviceDescription: string
}

export const CardFeature = ({image, alt, serviceDescription}: ICardProps) => {
  return(
    <div>
      <div className={cardFeatureStyle.card__box}>
        <img className={cardFeatureStyle.card__icon} src={image} alt={alt} />
        <p className={cardFeatureStyle.card__text__service}>{serviceDescription}</p>
      </div>
    </div>
  )
}