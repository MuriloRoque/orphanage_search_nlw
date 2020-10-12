import React from 'react';
import { Link } from 'react-router-dom';
import MapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Map 
        center={[-21.2066372,-47.8328526]}
        zoom={15}
        style={{ width: '100%', height: '100%' }} 
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#fff'/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;