import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

const Subcribe = () => {
    return (
       < Container> <div>
       <h1>Subscribe Our Email  For Newsletter</h1>
       <InputGroup className="mb-3">
    <FormControl
      placeholder="Email Address"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button className="btn"   id="button-addon2">
    Subscribe
    </Button>
  </InputGroup>

   </div></Container>
    );
};

export default Subcribe;