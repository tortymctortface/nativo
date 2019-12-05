//Sign up page
import TopBar from '../TopBar/top-bar';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase'; 
import { compose } from 'recompose';

const SignUpPage = () => (
  <div>
    <TopBar /> 
    <h1 id="signuph1">Sign Up</h1>
    <br></br>
    <SignUpForm />
  </div>
);


let nx = '0';
let lx = '0';
let groupx = '0';


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  nativelang: '',
  learnlang: '',
  agecheck: false,
  ismatched: false,
  nx: '', 	//number assigned for native language chosen(to be used in matching algorithm)
  lx: '',//number assigned for learning language chosen(to be used in matching algorithm)
  arrayx: '', // nx+lx = arrayx
  error: null,
};



var data = {

	username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  nativelang: '',
  learnlang: '',
  agecheck: false,
  lx: '',
  nx:'',
  groupx: '',
  ismatched: false


}


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
    this.state.email = this.props.location.state.email;
  }
  onSubmit = event => {

    const { username, email, passwordOne, nativelang, learnlang, agecheck, ismatched} = this.state;
//assigning lx a value
if (learnlang == "Arabic")
{
	lx= '1';
}
else if (learnlang == "English")
{
	lx= '2';
}
else if (learnlang == "French")
{
	lx= '4';
}
else if (learnlang == "German")
{
	lx= '8';
}
else if (learnlang == "Hindi")
{
	lx= '16';
}
else if (learnlang == "Irish")
{
	lx= '32';
}
else if (learnlang == "Spanish")
{
	lx= '64';
}
else if (learnlang == "Welsh")
{
	lx= '128';
}

//assigning nx a value
if (nativelang == "Arabic")
{
	nx= '1';
}
else if (nativelang == "English")
{
	nx= '2';
}
else if (nativelang == "French")
{
	nx= '4';
}
else if (nativelang == "German")
{
	nx= '8';
}
else if (nativelang == "Hindi")
{
	nx= '16';
}
else if (nativelang == "Irish")
{
	nx= '32';
}
else if (nativelang == "Spanish")
{
	nx= '64';
}
else if (nativelang == "Welsh")
{
	nx= '128';
}

var nxx = parseInt (nx,10);
var lxx = parseInt(lx,10);

groupx = lxx + nxx;

	data = this.state;
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
		nx,
		lx,
		groupx,
	ismatched

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
      lx,
      nx,
      arrayx,
      error,
    } = this.state;



//function to invalidate submit button if any of the follwing are true
   const isInvalid =
        passwordOne !== passwordTwo ||
      	passwordOne === '' ||
      	email === ''||
      	username === ''||
	      nativelang === ''||
 	      learnlang === ''||
		agecheck == false;
	
    
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
      	<option value="Arabic" value2 = {nx} nx = "1" >Arabic</option>
	      <option value="English" nx = "2" >English</option>
	<option value ="French" nx ="4" >French</option>
        <option value="German"  nx="8" >German</option>
        <option value="Hindi" nx = "16" >Hindi</option>
        <option value="Irish"  nx= "32" >Irish</option>
        <option value="Spanish"  nx="64" >Spanish</option>
      	<option value="Welsh"  nx= "128" >Welsh</option>
      </select>
 <br/>       
<br/>
{/*What language would you like to practice*/}
	    <b>What language would you like to practice?</b>
      <br/>
      <select name="learnlang" defaultValue ={learnlang} onChange={this.onChange}>
	      <option value="" disabled selected>I will speak</option>
      	<option value="Arabic" lx = "1"  >Arabic</option>
	      <option value="English" lx = "2" >English</option>
<option value ="French" lx ="4" >French</option>
        <option value="German"  lx ="8" >German</option>
        <option value="Hindi"  lx = "16" >Hindi</option>
        <option value="Irish"  lx="32">Irish</option>
        <option value="Spanish"  lx= "64">Spanish</option>
	      <option value="Welsh"  lx="128">Welsh</option>
      </select>
   
<br/>
<br/>

{/*over 18 slider - needs to be made a mandatory function for all users*/}
<b> Lastly, we need to make sure you are over 18 to use our app:</b>

<p> Yes I am over 18</p>
<label class="switch">
  <input type="checkbox" 
   value={agecheck} 
   onChange = {(e) =>this.setState({agecheck: !this.state.agecheck})}/>
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
    No account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };


