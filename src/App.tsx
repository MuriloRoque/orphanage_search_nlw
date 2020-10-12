import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id='page-landing'>
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
        <main>
          <h1>Bring happyness to the world</h1>
          <p>Visit orphanages and change many children's day</p>
        </main>
        <div className="location">
          <strong>Ribeirão Preto</strong>
          <span>São Paulo</span>
        </div>
        <a href="#" className='enter-app'>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
