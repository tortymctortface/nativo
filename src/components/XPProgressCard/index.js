import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class XPProgressCard extends Component {
    render() {
        const xpPercent = 80;
      return (
        <div class="d-inline-block ml-5"> 
          <Card style={{width: '35rem'}}>
            <Card.Header as="h5">
                XP
            </Card.Header>
            <Card.Body>
              <div class="d-inline-block">
                <Card.Title>Level 5</Card.Title>
                <Card.Text>
                You are 7 XP away from the next level. Keep it up! <br />

                Other users will reward you XP based on your conversations.
                
                Be friendly, answer questions and keep each other's language skills in mind.

                <br /> <br />
                </Card.Text>
              </div>
              <ProgressBar variant="warning" animated now={xpPercent} label={`${xpPercent}%`}/>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }