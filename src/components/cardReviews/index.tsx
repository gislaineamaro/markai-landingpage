import React from 'react'

import cardReviews from './style.module.scss'

interface ICardReviews {
  textReview: string
  customerImage: string
  customerName: string
  customerJob: string
  alt?: string
}

export const CardReviews = ({
  textReview,
  customerName,
  customerJob,
  customerImage,
  alt
}: ICardReviews) => {
  return (
    <div className={cardReviews.card__box}>
      <p className={cardReviews.text__review}>{textReview}</p>
      <div className={cardReviews.header__client__infos}>
        <div className={cardReviews.user__icon}>
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt={alt}
            className={cardReviews.image}
          />
        </div>
        <div className={cardReviews.client__infos}>
          <p className={cardReviews.client__name}>{customerName}</p>
          <p className={cardReviews.client__job}>{customerJob}</p>
        </div>
      </div>
    </div>
  )
}
