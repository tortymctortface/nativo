import React, { Component } from 'react';
import SignOut from '../SignOut/index';

import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

import user_img from '../../images/user-img.png';
import xp_icon from '../../images/xp-icon.png';
import flag_icon from '../../images/flag-icon.png';

class UserInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        users: [],
        this_username: ""
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
          users: usersList,
          loading: false,
          this_username: currentUser.username
        });
      });
    }
    componentWillUnmount() {
      this.props.firebase.users().off();
    }
  
    render() {
        const { this_username, loading } = this.state;
      return (
        <div class="d-inline-block float-right">
          <div class="d-inline-block mt-3 mr-5">
            <Link to={{pathname: '/home'}}>
              <button>Home</button>
            </Link>
          </div>
          <div class="d-inline-block float-right mt-3 mr-5">
            <img src={flag_icon} width="40px" class="ml-2 mr-4" alt="flag icon"/>
            59
            <img src={xp_icon} width="40px" class="ml-2 mr-4" alt="xp icon"/>
            Hi, {this_username != "" && this_username}
            <Link to={{pathname: '/account'}}>
              <img src={user_img} width="40px" class="ml-3 mr-3" alt="user image"/>
            </Link>
  
            <SignOut />
          </div>
        </div>
      );
    }
  }

  export default withFirebase(UserInfo);