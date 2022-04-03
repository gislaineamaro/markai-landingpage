import React from 'react';
import Helmet from 'react-helmet';

import { Home } from './pages/home';

import './global/styles/main.scss';

function App() {
  return (
    <>
      <Helmet title="Home - Markai"/>
      <Home/>
    </>
  );
}

export default App;
