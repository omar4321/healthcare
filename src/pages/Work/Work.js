import React from 'react';
import { Container } from 'react-bootstrap';
import "./Work.css"

const Work = () => {
    return (
      <div id="work" className="mt-3 mb-3">    <Container>
      <div className="mt-4  mb-4"> 
     
      <span className='title'> Our work</span>
  <div className="work-component">
 <div><p>Work Process</p>
 <h1>How it Works?</h1></div>
 <div><p>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis.</p></div>
 <div> <button className="btn">Make Appointment</button></div>
</div >

{/* work-component */}

<div className="work-component">
<div className="work-card">
<i class="fas fa-search icon"></i>
<h5>step-1</h5>
<h1>Search Best Online Professional</h1>
<p>It is a long established fact that a reader will be distracted by the readable.</p>
</div>
<div  className="work-card">
<i class="fas fa-calendar-check icon"></i>
<h5>step-2</h5>
<h1>Get Instant Appointment</h1>
<p>It is a long established fact that a reader will be distracted by the readable.</p>
</div>
<div  className="work-card"> 
<i class="fas fa-comments-dollar icon"></i>
<h5>step-3</h5>

<h1>Leave Your Feedback</h1>
<p>It is a long established fact that a reader will be distracted by the readable.</p></div>
</div>
</div>

{/* end */}
</Container></div>
    );
};

export default Work;