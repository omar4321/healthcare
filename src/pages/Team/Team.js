import React from 'react';
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import './Team.css'

const Team = ({team}) => {
    const { name ,SP,img} = team  ;
    return (
        <div>
            <div id='team'>
          <div className="box">  <div className="img-box"><img src= {img} alt="" /> </div></div>
           <h3> {name} </h3>
           <h3>  {SP}</h3>  
          <Button className='Service-btn'> Book  {name}</Button>

        </div>
        </div>
    );
};

export default Team;