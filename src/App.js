/*import logo from './logo.svg';
import './App.css';

import { MapContainer } from 'react-leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css" ;
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L, { popup } from  'leaflet'
import LeafletGeo from './LeafletGeo';
import LeafletRoutingMachine from './LeafletRoutingMachine';
function App() {
  const position1 = [36.8065, 10.1815];

  return (
    <MapContainer center={position1} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   <LeafletRoutingMachine/>
  </MapContainer>
  );
}
let markerIcon=L.icon({
  iconUrl:"/marker-icon.png",
 iconSize:[25,41],
 iconAnchor:[10,41],
 popupAnchor:[2,-40]
})

L.Marker.prototype.options.icon=markerIcon;

export default App;*/

import L from  'leaflet'

import "leaflet-control-geocoder/dist/Control.Geocoder.css" ;
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';
import LeafletRoutingMachine from './LeafletRoutingMachine';
import LeafletGeo from './LeafletGeo';
//import LeafletRoutingMachine from './LeafletRoutingMachine';

function App() {
  const [position, setPosition] = useState([36.8065, 10.1815]);
  
  const position2 = [36.602557, 10.490012];
  const position3 = [36.632041,10.371281];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          This is position 1.
        </Popup>
      </Marker>
    
      <Marker position={position3}>
        <Popup>
        This is position 3.
        </Popup>
      </Marker>
      <LeafletGeo/>
      <LeafletRoutingMachine/>
    </MapContainer>


  
  );
}
let markerIcon=L.icon({
  iconUrl:"/marker-icon.png",
 iconSize:[25,41],
 iconAnchor:[10,41],
 popupAnchor:[2,-40]
})

L.Marker.prototype.options.icon=markerIcon;
export default App;




