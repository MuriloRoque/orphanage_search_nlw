import React from 'react';
import { Link } from 'react-router-dom';
import MapMarkerImg from '../images/map-marker.svg';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
  iconUrl: MapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

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
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
        <Marker 
          position={[-21.2066372,-47.8328526]}
          icon={mapIcon}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#fff'/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;