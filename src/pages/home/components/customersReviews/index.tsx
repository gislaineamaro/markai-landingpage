import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { CardReviews } from '../../../../components/cardReviews'
import customerReview from './style.module.scss'

interface ICustomerReview {
  id: number
  name: string
  job: string
  review: string
  image: string
}

export const CustomerReviews = () => {

  const [clientsData, setClientsData] = useState<ICustomerReview[]>([])

  const getClientData = async () => {
    const response = await axios.get('http://localhost:3000/clients')
    setClientsData(response.data)
  }

  useEffect(() => {
    getClientData()
  }, [])

  return (
    <div className={customerReview.section__content}>
      <p className={customerReview.header__section}>Our Customer's Reviews</p>
      <div className={customerReview.cards__list}>
        {clientsData.map((data, key) => {
          return <CardReviews
            key={key}
            textReview={data.review}
            customerJob={data.job}
            customerName={data.name}
            customerImage={data.image}
          />
        })}
      </div>
    </div>
  )
}
