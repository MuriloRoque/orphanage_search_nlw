import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import '../styles/pages/orphanage.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean,
  images: Array<{
    id: number,
    url: string,
  }>;
}

interface OrphanageParams {
  id: string,
}

const Orphanage = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  }, [params.id])
  if (!orphanage) {
    return <p>Carregando...</p>
  }
  return (
    <div id="page-orphanage">
      <Sidebar />
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map((image, index) => {
              return (
                <button 
                  key={image.id} 
                  type="button" 
                  className={activeImageIndex === index ? 'active' : ''} 
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}>
                  <img src={image.url} alt={orphanage.name} />
                </button>
              )
            })}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Check Google Maps routes</a>
              </footer>
            </div>

            <hr />

            <h2>Visit instructions</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {orphanage.opening_hours}
              </div>
              { orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Open <br />
                  on weekends
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Not open <br />
                  on weekends
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orphanage;
