//Sign up page
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase'; 
import { compose } from 'recompose';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

<<<<<<< Updated upstream

let nx = '0';
let lx = '0';
let arrayx = '0';
=======
let nx = '0';
let lx = '0';
let groupx = '0';
>>>>>>> Stashed changes

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  nativelang: '',
  learnlang: '',
  agecheck: '',
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
  agecheck: '',
<<<<<<< Updated upstream
  nx: '',
  lx: '',
  arrayx:'' ,
	
=======
  lx: '',
  nx:'',
  groupx: ''

>>>>>>> Stashed changes
}


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
    this.state.email = this.props.location.state.email;
  }
  onSubmit = event => {
<<<<<<< Updated upstream

    const { username, email, passwordOne, nativelang, learnlang, agecheck} = this.state
//assigning a value to lx
if (learnlang == "Arabic")
{
	lx = "1";
}
else if (learnlang == "English")
{
	lx = "2";
}
else if (learnlang == "French" )
{
	lx ="4";
}
else if (learnlang == "German" )
{
	lx = "8";
}
else if (learnlang == "Hindi")
{
	lx = "16";
}
else if (learnlang == "Irish")
{
	lx = "32";
}
else if (learnlang == "Spanish")
{
	lx = "64";
}
else if(learnlang == "Welsh")
{
	lx = "128";
}
//assigning a value to nx
if (nativelang == "Arabic")
{
	nx = "1";
}
else if (nativelang == "English")
{
	nx = "2";
}
else if (nativelang == "French" )
{
	nx ="4";
}
else if (nativelang == "German" )
{
	nx = "8";
}
else if (nativelang == "Hindi")
{
	nx = "16";
}
else if (nativelang == "Irish")
{
	nx = "32";
}
else if (nativelang == "Spanish")
{
	nx = "64";
}
else if(nativelang == "Welsh")
{
	nx = "128";
}

var nxx = parseInt(nx, 10);
var lxx = parseInt(lx, 10);
arrayx = nxx + lxx;

 
=======
    const { username, email, passwordOne, nativelang, learnlang, agecheck} = this.state;
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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
		arrayx
=======
		groupx
>>>>>>> Stashed changes
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
<div>
      <form onSubmit={this.onSubmit}>
{/*username input box*/}
        <input 
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
{/*email address input box*/}
        <input 
          name="email"
          value={email}
          onChange={this.onChange} 
          type="text"
          placeholder="Email Address"
        />
{/*both password input boxes*/}
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />

<br/>
<br/>

{/*What language do you speak fluently*/}		
      <p>What language do you speak fluently?</p> 
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
	    <p>What language would you like to practice?</p>
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
<p> Lastly, we need to make sure you are over 18 to use our app:</p>

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
    No account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
