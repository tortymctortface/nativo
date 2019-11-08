//Landing
import React from 'react';

import TopBar from '../TopBar/top-bar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';

const Landing = () => (
  <div>
    <TopBar />

    <div class="w-50 mx-auto">
      <h3>Welcome to Nativo, the language learning app</h3>
    </div>

    <br />

    <div class="w-50 mx-auto">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" class="w-50"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>

        <div class="text-center">
          <div class="d-inline-block m-1">    
            <Button variant="warning" as="input" type="submit" value="Login"></Button>
          </div>

          <div action class="d-inline-block m-1">
     		   <SignUpLink />
 <PasswordForgetLink />
          </div>
        </div>
    </Form>
    </div>
  </div>
);
export default Landing;
