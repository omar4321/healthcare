// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// const Booking = () => {
//     const {serviceId } = useParams();
  
//      const [service, setService] = useState([]);
//     useEffect(()=>{
//         fetch('../Services.json')
//         .then(res=> res.json())
//         .then(data => setService(data))
//     },[])


//       let data ;
//      if(service){
//       data= service.filter((data)=>data.id===  parseInt(serviceId));
//       console.log( service
//         )
      
//      }
//   if( data === undefined){
//       return data;
//   }
    
//     return (
//         <div className='mt-4'>
//                 <h2>Book your services:- {data[0].name} </h2>
//                <img src= {data[0].img} alt="" />
//                    <h1>Thank you</h1>
            
          
//         </div>
//     );
// };

// export default Booking;
