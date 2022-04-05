import React from 'react'

import './style.scss'

interface ICardProps{
  image: string
  alt: string
  serviceDescription: string
}

export const CardFeature = ({image, alt, serviceDescription}: ICardProps) => {
  return(
    <div>
      <div className="card__box">
        <img className="card__icon" src={image} alt={alt} />
        <p className="card__text--service">{serviceDescription}</p>
      </div>
    </div>
  )
}