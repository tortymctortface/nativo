import React, { Component } from 'react';
import { withAuthorization } from '../Session';

import TopBarPlus from '../TopBarPlus/top-bar-plus';

import 'bootstrap/dist/css/bootstrap.min.css';
import { withFirebase } from '../Firebase';

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
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
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
  const { users, loading } = this.state;

    return (
      <div>
        <TopBarPlus />

        <div>
          <div class="ml-5 mt-3 d-inline-block">
            <h1>Get chatting!</h1>
            <p>Pick up where you left off with your pen pal.</p>

            <h4>All Users</h4>
            {loading && <div>Loading ...</div>}
            <UserList users={users} />
          </div>

          <br /><br />
        </div>

      </div>
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