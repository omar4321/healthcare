import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId } = useParams();
  
     const [service, setService] = useState();
     useEffect(()=>{
        fetch('../Services.json') 
        .then(res => res.json())
        .then(data => setService(data.filter((data)=>data.id===  parseInt(serviceId))))
    },[serviceId])
  
    return (
        service?( <div className='mt-4'>
        <h2>Book your services:- {service[0].name} </h2>
       <img src= {service[0].img} alt="" />
           <h1>Thank you</h1>
    
  
</div>):null
    );
};

export default Booking;
