// Map.js
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const Map = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAJVAF7V31SoMu58F7NzTe283B6Jwlq3d0', // ✅ Only the API key, not the full URL
  });

  const center = props.center || { lat: 28.6139, lng: 77.2090 }; // Delhi default
  const zoom = props.zoom || 10;

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
