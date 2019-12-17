import React, { Component } from 'react';
import { withFirebase } from '../Firebase'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'

class XPProgressCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xp: 10
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));
      const currentUID = this.props.authUser.uid;
      let currentUser = usersList.find(user => user.uid === currentUID);
      this.setState({
        xp: currentUser.xp
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

    render() {
      let xp = this.state.xp;
      return (
        <div class="d-inline-block ml-5 mt-3"> 
          <Card style={{width: '35rem'}}>
            <Card.Header as="h5">
                XP
            </Card.Header>
            <Card.Body>
              <div class="d-inline-block">
                <Card.Title>Level 1</Card.Title>
                <Card.Text>
                You are {100 - xp} XP away from the next level. Keep it up! <br />

                Other users will reward you XP based on your conversations.
                
                Be friendly, answer questions and keep each other's language skills in mind.

                <br /> <br />
                </Card.Text>
              </div>
              <ProgressBar variant="warning" animated now={xp} label={`${xp}%`}/>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  export default withFirebase(XPProgressCard);