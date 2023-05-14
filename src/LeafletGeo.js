import React, { useEffect } from "react";
import L from 'leaflet'
import { useMap } from "react-leaflet";


const LeafletGeo=()=>{

const map=useMap()

    useEffect(() => {

       L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) { //l e heya fiha bbox w center (fih lat w lng)
                var latltng = e.geocode.center;
                L.marker(latltng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);



        
    },[]);

return null;
}
export default LeafletGeo