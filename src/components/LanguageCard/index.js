import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import flag_icon from '../../images/flag-icon.png';

export default class LanguageCard extends Component {
  render() {
    return (
      <div class="d-inline-block float-right"> 
        <Card style={{width: '25rem'}}>
          <Card.Header as="h5">Languages</Card.Header>
          <Card.Body>
            <img class="d-inline-block float-left" src={flag_icon} width="50px"/>
            <div class="d-inline-block mr-5 ml-3">
              <Card.Title>Irish</Card.Title>
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