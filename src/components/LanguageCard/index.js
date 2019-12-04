import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import german_icon from '../../images/german.png'
import hindi_icon from '../../images/hindi.png'
import irish_icon from '../../images/irish.png'
import english_icon from '../../images/english.png'
import arabic_icon from '../../images/arabic.png'
import spanish_icon from '../../images/spanish.png'
import welsh_icon from '../../images/welsh.png'

class LanguageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ""
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
      this.setState({
        language: currentUser.learnlang
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    let language = this.state.language.toLowerCase();
        let images = {
          irish: irish_icon,
          german: german_icon,
          english: english_icon,
          hindi: hindi_icon,
          arabic: arabic_icon,
          welsh: welsh_icon,
          spanish: spanish_icon
        }
    return (
      <div class="d-inline-block float-right"> 
        <Card style={{width: '25rem'}}>
          <Card.Header as="h5">Languages</Card.Header>
          <Card.Body>
            <img class="d-inline-block float-left" src={images[language]} width="50px"/>
            <div class="d-inline-block mr-5 ml-3">
              <Card.Title>{this.state.language}</Card.Title>
              <Card.Text>
                Total XP: 59
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withFirebase(LanguageCard);