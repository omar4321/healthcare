import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 22.330370,
    lng: 91.832626
  };
const Map = () => {
    return (
        <div>
            <h2>Our Loction</h2>
            <LoadScript
        googleMapsApiKey="{REACT_APP_KEY}"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
            
        </div>
    );
};

export default Map;