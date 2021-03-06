import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = ({ service}) => {
    const {id, name ,price,description,img} = service ;
    return (
        <div id='Service' className='mt-3 mb-3'>
            <div className="box"><div className="img-box"> <img src= {img} alt="" /> </div></div>
           <h3 className="mt-3">Name:- {name} </h3>
           <h3> Price:- {price}</h3>  
           <p>{description}</p>
            <Link to={`/booking/${id}`} >   <Button className='Service-btn mb-3'>Book  {name.toLowerCase()}</Button></Link>

        </div>
    );
};

export default Service;