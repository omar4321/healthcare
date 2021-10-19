import React from 'react';
import './Banner.css'

import Button from 'react-bootstrap/Button'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg';
import banner2 from '../../../images/Banner/banner2.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';


const Banner = () => {
    return (
        <>
         
          <div className='carousel' >
          <Carousel  >
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                       
                    />
                    <Carousel.Caption  className="text">
                    <h1 >Find A Best  Doctor Near By You </h1>
                    <Button variant="danger">Find A Doctor <i class="fas fa-angle-double-right"></i>  </Button>
                        <p>Nulla vitae elit libero a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption  className="text">
                    <h1   >Find A Best Doctor Near By You </h1>
                    <Button variant="danger">Find A Doctor <i class="fas fa-angle-double-right"></i>  </Button>
                        <p>Nulla vitae elit libero a pharetra augue mollis interdum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption  className="text">
                        <h1 >Find A Best Doctor Near By You </h1>
                    <Button variant="danger">Find A Doctor <i class="fas fa-angle-double-right"></i>  </Button>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          </div>
           
        </>
    );
};

export default Banner;