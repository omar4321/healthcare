import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Notfound = () => {
    return (
        <div>
             <img style={{ width: '100%' }} src="https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt=""
             
             
             />
            <Link to="/"><Button variant="danger mb-4">Go Back </Button> 
            </Link> 
        </div>
    );
};

export default Notfound;