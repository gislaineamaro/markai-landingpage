import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'

import './global/styles/main.scss'

function App() {
  return (
    <>
      <Helmet title="Home - Markai" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
