import React, { Component } from 'react';
import TopBar from '../TopBar/top-bar';
import SignOut from '../SignOut/index';

import { AuthUserContext, withAuthorization } from '../Session';
import { Link } from 'react-router-dom';

import user_img from '../../images/user-img.png';
import xp_icon from '../../images/xp-icon.png';
import flag_icon from '../../images/flag-icon.png';

const TopBarPlus = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <TopBar />

        <UserInfo user={authUser.email}/>

        <hr />
      </div>
    )}
  </AuthUserContext.Consumer>
);

class UserInfo extends Component {
  render() {
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
          Hi, {this.props.user}
          <Link to={{pathname: '/account'}}>
            <img src={user_img} width="40px" class="ml-3 mr-3" alt="user image"/>
          </Link>

          <SignOut />
        </div>
      </div>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(TopBarPlus);