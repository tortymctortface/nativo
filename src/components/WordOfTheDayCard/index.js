import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import flag_icon from '../../images/flag-icon.png';

export default class WordOfTheDayCard extends Component {
    render() {
      return (
        <div class="d-inline-block ml-5"> 
          <Card style={{width: '35rem'}}>
            <Card.Header as="h5">
                <img class="d-inline-block float-left mt-1 mr-2" src={flag_icon} width="20px"/>
                Word Of the Day - Irish
            </Card.Header>
            <Card.Body>
              <div class="d-inline-block">
                <Card.Title>Fáilte</Card.Title>
                <Card.Text>
                This word also translates to ‘joy, bliss or happiness’, but is mostly used to say ‘welcome’.

                <br /> <br />

                Pronounce it like this: fawl-cha
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }