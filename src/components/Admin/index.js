import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {
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
        <h1>Admin</h1>

	      {loading && <div>Loading ...</div>}
	
	      <UserList users={users} />

      </div >
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
	<span>
<<<<<<< Updated upstream
          <strong>Nx</strong> {user.nx}
        </span>
<span>
          <strong>Lx</strong> {user.lx}
        </span>
<span>
          <strong>Arrayx</strong> {user.arrayx}
=======
          <strong>nx</strong> {user.nx}
        </span>
	<span>
          <strong>lx</strong> {user.lx}
        </span>
	<span>
          <strong>groupx</strong> {user.groupx}
>>>>>>> Stashed changes
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
