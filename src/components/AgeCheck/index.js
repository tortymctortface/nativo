//AGECHECK page not yet working - Matt
import React, { Component } from 'react';
import TopBar from '../TopBar/top-bar';
import * as ROUTES from '../../constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase'; 
import { compose } from 'recompose';

const AgeCheckPage = () => (
  <div>
    <TopBar />
</div>
);
const INITIAL_STATE = {
  check: '',
  error: null,
};
class AgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const AgeChecklink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.AGE_CHECK}>Sign Up</Link>
  </p>
);
export default AgeCheckPage;
export {AgeChecklink };
