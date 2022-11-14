import { useEffect, useRef, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "./MapContainer.scss";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
const MapContainer = ({ long, lat }) => {
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(long);
  const [latitude, setLatitude] = useState(lat);
  const mapElement = useRef();
  console.log(long, lat);
  let destinations = [];
  const origin = {
    lng: longitude,
    lat: latitude,
  };
  destinations.push(origin)
  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng
      }
    }
  }
  const drawRoute = (geoJson, map) => {
    if (map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geoJson
      },
      paint: {
        'line-color': '#4a90e2',
        'line-width': 6
  
      }
    })
  }
  
  const addDestinationMarker = (lngLat, map) => {
    const element = document.createElement("div");
    element.className = "marker-destination";
    new tt.Marker({
      element: element,
    })
      .setLngLat(lngLat)
      .addTo(map);
  };
 
  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });
    setMap(map);
    const addMarker = () => {
      const popUpOffSet = {
        bottom: [0, -25],
      };
      const popup = new tt.Popup({ offset: popUpOffSet }).setHTML("This is you!");
      const element = document.createElement("div");
      element.className = "marker";
      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);

      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setLatitude(lngLat.lng);
        setLatitude(lngLat.lat);
      });
      marker.setPopup(popup).togglePopup();
    };
    addMarker();
   
    return () => map.remove();
  }, [longitude, latitude]);

  map.on("click", (e) => {
    destinations.push(e.lngLat);
    addDestinationMarker(e.lngLat, map);
  });

  
  
  const calculateRoutes = () => {
      ttapi.services
        .calculateRoute({
          key: process.env.REACT_APP_TOM_TOM_API_KEY,
          locations: destinations,
        })
        .then((routeData) => {
          const geoJson = routeData.toGeoJson()
          drawRoute(geoJson, map)
          console.log(geoJson);
      })
  }

  console.log(destinations);
  
  return <div>{map && <div ref={mapElement} className="map"></div>}
  <button onClick={calculateRoutes}>Route</button></div>;
};
export default MapContainer;
