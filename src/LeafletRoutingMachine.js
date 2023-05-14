import { useEffect } from "react";
import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from "react-leaflet";
const LeafletRoutingMachine =()=>{
const map = useMap()
useEffect(()=>{


    

   L.Routing.control({
        waypoints: [
          L.latLng(36.702557, 10.490012), 
          L.latLng(36.632041,10.371281),
          L.latLng(36.806389,10.181667),
        ],

        lineOptions:{
            styles:[
                {
                    color:"blue",
                    
                }
            ]
        },
        routeWhileDragging:false,
        geocoder:L.Control.Geocoder.nominatim(),
        addWaypoints:true,
        draggableWaypoints:false,
        fitSelectedRoutes:true,
        showAlternatives:false,
      }).addTo(map);

},[])
 


    return null;



}
export default LeafletRoutingMachine;