import React from 'react';
import Helmet from 'react-helmet';
import './global/styles/main.scss';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <Helmet title="Home - Markai"/>
      <Home/>
    </>
  );
}

export default App;
