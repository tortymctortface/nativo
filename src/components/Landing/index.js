//Landing
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import TopBar from '../TopBar/top-bar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PasswordForgetLink } from '../PasswordForget';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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

class LandingFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onLogIn = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

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
            <Button variant="outline-warning" as="input" type="submit" value="Log In" onClick={this.onLogIn}></Button>
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

const LandingForm = compose(
  withRouter,
  withFirebase,
)(LandingFormBase);

export default Landing;
export { LandingForm };