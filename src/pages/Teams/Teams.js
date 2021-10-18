import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Teams.css'

const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        fetch('./Team.json') 
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div id='teams'>
         <h5 >Meet Our Team</h5>
        <h2 >Our Creative Team</h2>
        <div className="teams-container">
           {  
              teams.map( team=><Team key= {team.id} 
                team = {team }
             ></Team>) 
           }
        </div>
        </div>
    );
};

export default Teams;