import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { Card, Container } from 'react-bootstrap';
import './dirs.css'



const location = {
    lat: 22.330370,
    lng: 91.832626
};

const Direction = ({ origin, destination }) => {
    const [response, setResponse] = useState(null);
    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }
    return (
    <Container>
         <div id="find" className="info-container"> 
           
           <div className="me-3"  ><h1>Our Information</h1>
                       <Card style={{ width: '25rem',margin:"auto" }}>
         <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/electronic-health-record-electronic-health-record-doctors-analyze-patient-ehr-to-make-correct-diagnosis-prescribe-treatment-227682447.jpg" />
         <Card.Body>
           <Card.Title> <i class="fas fa-mobile"></i> Mobile: +0083543454</Card.Title>
           <Card.Title> <i class="fas fa-map-marker"></i> Office: 12 Fake Street,New York</Card.Title>
          
           <Card.Title> <i class="fas fa-mail-bulk"></i> Mail: support.goaltheme.com</Card.Title>
         </Card.Body>
       </Card>
                       </div>
                 <div >   
                 <h1> Find Our Location</h1> 
                           <LoadScript
                          googleMapsApiKey={process.env.REACT_APP_KEY}
                      >
                          <GoogleMap
                              id='direction-example'
                              mapContainerStyle={{
                                  height: '300px',
                                  width: '100%'
                              }}
                              // required
                              zoom={14}
                              // required
                              center={location}
                          >
          
                              <DirectionsService
                                  // required
                                  options={{
                                      origin: origin,
                                      destination: destination,
                                      travelMode: 'DRIVING'
                                  }}
                                  // required
                                  callback={directionsCallback}
                              />
          
          
                              {
                                  response !== null && (
                                      <DirectionsRenderer
                                          // required
                                          options={{
                                              directions: response
                                          }}
                                      />
                                  )
                              }
                          </GoogleMap>
                      </LoadScript>
                 </div>
          
       
                  
             </div>
    </Container>
    );
};

export default Direction;