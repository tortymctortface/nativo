import React, { Component } from 'react';
import { withAuthorization } from '../Session';

import TopBarPlus from '../TopBarPlus/top-bar-plus';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const ChatPage = () => (
  <div>
    <TopBarPlus />

    <div>
      <div class="ml-5 mt-3 d-inline-block">
        <h1>Get chatting!</h1>
        <p>Pick up where you left off with your pen pal.</p>
      </div>

      <br /><br />
    </div>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ChatPage);