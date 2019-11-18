import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class CountdownCard extends Component {
    render() {
      return (
        <div class="d-inline-block float-right mr-5 text-center"> 
          <Card style={{width: '35rem', textAlign: 'center'}}>
            <Card.Header as="h5">Next Shuffle</Card.Header>
            <Card.Body>
              <div class="text-center">
                <Card.Text>
                  <Countdown date={Date.now() + 10000 * 10000} /> 
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }