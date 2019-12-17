import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import user_img from '../../images/user-img.png';

class MatchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      language: "",
      email: "",
      currentXP: 0,
      giftXP: 0
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
  const currentUID = this.props.authUser.uid;
  let currentUser = usersList.find(user => user.uid === currentUID);
	//const matchnx = matchUser.nativelang;
	const currentlx = currentUser.learnlang;
	//const matchmatched = matchUser.ismatched;
  const cx = currentUser.groupx;
	//const mx = matchUser.groupx;
  let matchUser = usersList.find(user=>user.uid !== currentUID
                                  && user.groupx === cx
                                  && user.ismatched === false
                                  && user.nativelang === currentlx);
                                  
	if (matchUser == null) {
      this.setState({
	      username: 'We are still searching for you perfect match',
        loading: false,
        language: 'We are looking for someone who is a native ' + currentUser.learnlang + ' speaker for you.',
	      email : 'Please check back soon, we have new members every hour',
	      ismatched :false,
	      penpal: '',
	      addfriend: 'You will soon be able to add some friends here',
        matchheader: 'Your perfect match is coming soon..',
        currentXP: currentUser.xp
      });
  }
	else {
      this.setState({
	      username: matchUser.username,
        loading: false,
        language: 'Native in : ' + currentUser.learnlang,
	      email : 'Contact : ' + matchUser.email,
	      groupx : currentUser.groupx,
	      ismatched : true,
	      penpal: 'How much XP has your pen pal earned?',
	      addfriend: 'Add your match as a friend',
        matchheader: 'Your current Match',
        currentXP: currentUser.xp,
        matchUID: matchUser.uid,
        matchCurrentXP: matchUser.xp
      });
    }
  });
}

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  handleSliderChange = (event) => {
    this.setState({giftXP: event.target.value});
  }

  handleXPSubmit = () => {
    let matchUID = this.state.matchUID;
    let newXP = parseInt(this.state.matchCurrentXP)+ parseInt(this.state.giftXP);
    this.props.firebase
          .user(matchUID)
          .update({xp: newXP})
  }

   
  render() {
    const { loading, language, email,username, ismatched, penpal, addfriend, matchheader} = this.state;
    let isInvalid = ismatched === false;

    return (
      <div class="mt-3 w-90 mx-auto"> 
        <Card style={{width: '25rem', margin: 'auto'}}>
          <Card.Header as="h5">{matchheader}</Card.Header>
          <Card.Body>
            <div class="mb-3">
              <img class="d-inline-block float-left" src={user_img} width="50px"/>
              <div class="d-inline-block ml-3">
                {loading ? <Card.Text>Loading...</Card.Text>
                  : <div>
                      <Card.Title>{username}</Card.Title>
                      <Card.Text>
                        {language} <br />
                        <br/>
                         {email} <br />

                          <br/>
                        <input disabled={isInvalid} type="checkbox" className="" id="customRange1" value="Add as friend" /> <strong>{addfriend}</strong> <br /> <br />

                        {penpal} <br />

                        {this.state.giftXP}  
                      </Card.Text>

                      <input  disabled={isInvalid} type="range" className="custom-range" id="customRange1" value={this.state.giftXP} onChange={this.handleSliderChange} />
                      <div className="text-center">
                        <Button disabled={isInvalid} variant="outline-warning" size="sm" value="Submit" className="mx-auto" onClick={this.handleXPSubmit}>Submit</Button>
                      </div>

                      <br />

                      <Button disabled={isInvalid} variant="warning" value="Contact" block href={"mailto:" + email}>Contact</Button>
                    </div>
                }
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withFirebase(MatchCard);
