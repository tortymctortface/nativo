//Sign up page
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase'; 
import { compose } from 'recompose';

const SignUpPage = () => (
  <div>
    <br></br>
    <h1 id="signuph1">Sign Up</h1>
    <br></br>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  nativelang: '',
  learnlang: '',
  agecheck: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
    this.state.email = this.props.location.state.email;
  }
  onSubmit = event => {
    const { username, email, passwordOne, nativelang, learnlang, agecheck} = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database including the following info
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
          username,
          email,
 	        nativelang,
	        learnlang,
	        agecheck,
          });
      })
	.then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
	    nativelang,
	    learnlang,
	    agecheck,
      error,
    } = this.state;

var a = new Boolean();
function terms_change(checkbox){
    //If it is checked.
    if(checkbox.checked){
        a = true;
	return a;
    }
    //If it has been unchecked.
    else{
        a = false;
	return a;
    }
}

{/*function to invalidate submit button if any of the follwing are true*/}
   const isInvalid =
        passwordOne !== passwordTwo ||
      	passwordOne === '' ||
      	email === ''||
      	username === ''||
	      nativelang === ''||
 	      learnlang === '';
	
    
return (
<div id="signupall">
      <form onSubmit={this.onSubmit}>
{/*username input box*/}
<label for="username"><b>Username</b></label>
<br></br>
        <input id="signupinput"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Username"
        />
        <br></br>
{/*email address input box*/}
<label for="email"><b>Email</b></label>
<br></br>
        <input id="signupinput"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Email Address"
        />
        <br></br>
{/*both password input boxes*/}
<label for="password"><b>Password</b></label>
<br></br>
        <input id="signupinput"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Enter Password"
        />
        <br></br>
<label for="Confirmpassword"><b>Confirm Password</b></label>
<br></br>
        <input id="signupinput"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />

<br/>
<br/>

{/*What language do you speak fluently*/}		
      <b>What language do you speak fluently?</b> 
      <br></br>
      <select name="nativelang" defaultValue ={nativelang} onChange={this.onChange}>
	      <option value="" disabled selected>I am fluent in</option>
      	<option value="Arabic">Arabic</option>
	      <option value="English">English</option>
        <option value="German">German</option>
        <option value="Hindi">Hindi</option>
        <option value="Irish">Irish</option>
        <option value="Spanish">Spanish</option>
      	<option value="Welsh">Welsh</option>
      </select>
 <br/>       
<br/>
{/*What language would you like to practice*/}
	    <b>What language would you like to practice?</b>
      <br/>
      <select name="learnlang" defaultValue ={learnlang} onChange={this.onChange}>
	      <option value="" disabled selected>I will speak</option>
      	<option value="Arabic">Arabic</option>
	      <option value="English">English</option>
        <option value="German">German</option>
        <option value="Hindi">Hindi</option>
        <option value="Irish">Irish</option>
        <option value="Spanish">Spanish</option>
	      <option value="Welsh">Welsh</option>
      </select>
       
<br/>
<br/>

{/*over 18 slider - needs to be made a mandatory function for all users*/}
<b> Lastly, we need to make sure you are over 18 to use our app:</b>

<p> Yes I am over 18</p>
<label class="switch">
  <input 
   type="checkbox"
   value ={agecheck}
   id="terms" 
   />
  <span class="slider round"></span>
</label>

<br/>

{/*submit button*/}
     
  <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}

      </form>
</div>
    );

  }

  
}
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };


