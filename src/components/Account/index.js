import React, { Component } from 'react';
import TopBarPlus from '../TopBarPlus/top-bar-plus';
import LanguageCard from '../LanguageCard/index';
import FriendCard from '../FriendCard/index';

import PasswordChangeForm from '../PasswordChange';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

import user_img from '../../images/user-img.png';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      const currentUID = this.props.authUser.uid;
      let currentUser = usersList.find(user => user.uid === currentUID);
      this.setState({
        username: currentUser.username
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const authUser = this.props.authUser;
    return (
          <div>
            <TopBarPlus />

            <div class="d-inline-block float-left ml-5">
              <img src={user_img} width="100px" class="ml-3 mr-3 float-left" alt="user image"/>

              <div>
                <h3 class="d-inline-block">{this.state.username}</h3> <br />
                <h5 class="d-inline-block" style={{fontWeight: "normal"}}>{authUser.email}</h5>
              </div>

              <br />
              <div class="mt-4">
                <h5>Want to change password?</h5>
                <PasswordChangeForm />
              </div>
            </div>

            <div class="d-inline-block float-right w-50 mr-5">
              <LanguageCard authUser={authUser}/>
              <FriendCard />
            </div>
          </div>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(AccountPage));