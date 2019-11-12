//Landing
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../TopBar/top-bar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PasswordForgetLink } from '../PasswordForget';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const Landing = () => (
  <div>
    <TopBar />

    <div class="w-50 mx-auto">
      <h3>Welcome to Nativo, the language learning app</h3>
    </div>

    <br />

    <LandingForm />
  </div>
);

class LandingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div class="w-50 mx-auto">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.onChange}
            class="w-50"
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onChange}
            class="w-50"
          />
        </Form.Group>

        <div class="text-center">
          <div class="d-inline-block m-1">    
            <Link to={{
              pathname: '/signup',
              state: {
                email: this.state.email,
              }
            }}>
              <Button variant="warning" as="input" type="submit" value="Sign Up"></Button>
            </Link>
          </div>

          <div class="d-inline-block m-1">
            <Button variant="outline-warning" as="input" type="submit" value="Log In"></Button>
          </div>
        </div>
    </Form>

    <div class="w-50 mx-auto text-center">
      <PasswordForgetLink />
    </div>
    </div>
    );
  }
}

export default Landing;