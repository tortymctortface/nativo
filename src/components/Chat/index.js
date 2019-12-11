import React, { Component } from 'react';
import { AuthUserContext } from '../Session';

import TopBarPlus from '../TopBarPlus/top-bar-plus';
import MatchCard from '../MatchCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import { withFirebase } from '../Firebase';

class ChatPage extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <TopBarPlus />

            <div>
              <div class="ml-5 mt-3">
                <h1>Get chatting!</h1>
                <p>Pick up where you left off with your pen pal.</p>

                <div class="w-90 mx-auto"></div>
                <MatchCard authUser={authUser}/>
              </div>

              <br /><br />
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
	<span>
          <strong>E-Mail:</strong> {user.email}
        </span>
	<span>	
          <strong>Native Language</strong> {user.nativelang}
        </span>
        <span>
          <strong>Learn Language</strong> {user.learnlang}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(ChatPage);