import React from 'react';
import Direction from '../../Map/Direction/Direction';

import Subcribe from '../../Subcribe/Subcribe';
import Teams from '../../Teams/Teams';
import Work from '../../Work/Work';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';







const Home = () => {
    return (
        <div>
        
          <Banner></Banner>
          <Services></Services>
         <Teams></Teams>
         <Work></Work>
         <Subcribe></Subcribe>
         <Direction/>
        
        </div>
    );
};

export default Home;