import React from 'react';
import { Link } from 'react-router-dom';
import MapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';

const OrphanagesMap = () => {
  return(
    <div id='page-map'>
      <aside>
        <header>
          <img src={MapMarkerImg} alt=""/>
          <h2>Choose an orphanage in the map</h2>
          <p>A lot of children are waiting for your visit :)</p>
        </header>
        <footer>
          <strong>Ribeirão Preto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <div></div>
      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#fff'/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;