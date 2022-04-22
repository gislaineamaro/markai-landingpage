import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from '../../components/footer'

import { Header } from '../../components/header'
import { Banner } from './components/banner'
import { Benefits } from './components/benefits'
import { Contact } from './components/contact'
import { CustomerReviews } from './components/customersReviews'
import { Features  } from './components/features'

import homeStyle  from './style.module.scss'

export const Home = () => {
  return (
    <>
      <Helmet title="Home - Markai" />

      <div className={homeStyle.header__gradient}>
        <Header />
        <Banner />
      </div>
          <Features/>
          <Benefits/>
          <CustomerReviews/>
          <Contact/>
      <Footer />
    </>
  )
}
