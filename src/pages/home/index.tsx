import React from 'react'
import { Footer } from '../../components/footer'

import { Header } from '../../components/header'
import { Banner } from './components/banner'

import './style.scss'

export const Home = () => {
  return (
    <>
      <div className="header__gradient">
        <Header />
        <Banner />
        <Footer />
      </div>
    </>
  )
}
