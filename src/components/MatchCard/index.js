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
      xp: 0
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
        loading: false,
        language: currentUser.learnlang,
        email: "sample@email.com"
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  handleSliderChange = (event) => {
    this.setState({xp: event.target.value});
  }

  render() {
    const { loading, language, email } = this.state;

    return (
      <div class="mt-3 w-90 mx-auto"> 
        <Card style={{width: '25rem', margin: 'auto'}}>
          <Card.Header as="h5">Current Match</Card.Header>
          <Card.Body>
            <div class="mb-3">
              <img class="d-inline-block float-left" src={user_img} width="50px"/>
              <div class="d-inline-block ml-3">
                {loading ? <Card.Text>Loading...</Card.Text>
                  : <div>
                      <Card.Title>Frank365</Card.Title>
                      <Card.Text>
                        Native Language: {language} <br />
                        Contact: {email} <br />
                        <input type="checkbox" className="" id="customRange1" value="Add as friend" /> <strong>Add as friend</strong> <br /> <br />

                        How much XP has your pen pal earned? <br />
                        {this.state.xp}
                      </Card.Text>

                      <input type="range" className="custom-range" id="customRange1" value={this.state.xp} onChange={this.handleSliderChange} />

                      <br />

                      <Button variant="warning" value="Contact" block href={"mailto:" + email}>Contact</Button>
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