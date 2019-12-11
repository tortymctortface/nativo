import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import user_img from '../../images/user-img.png';

export default class FriendCard extends Component {
  render() {
    return (
      <div class="d-inline-block float-right mt-3"> 
        <Card style={{width: '25rem'}}>
          <Card.Header as="h5">Friends</Card.Header>
          <Card.Body>
            <div class="mb-3">
              <img class="d-inline-block float-left" src={user_img} width="50px"/>
              <div class="d-inline-block ml-3">
                <Card.Title>Frank365</Card.Title>
                <Card.Text>
                  Native Language: French <br />
                  Contact: frank@email.com
                </Card.Text>
              </div>
            </div>


            <div class="mb-3">
              <img class="d-inline-block float-left" src={user_img} width="50px"/>
              <div class="d-inline-block ml-3">
                <Card.Title>Anne_Berlin</Card.Title>
                <Card.Text>
                  Native Language: German <br />
                  Contact: anne@email.com
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}