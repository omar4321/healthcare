import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = ({ service}) => {
    const {id, name ,price,description,img} = service ;
    return (
        <div id='Service'>
          <img src= {img} alt="" /> 
           <h3>Name:- {name} </h3>
           <h3> Price:- {price}</h3>  
           <p>{description}</p>
            <Link to={`/booking/${id}`} >   <Button className='Service-btn'>Book  {name.toLowerCase()}</Button></Link>

        </div>
    );
};

export default Service;