import React, { Component } from 'react';
import TopBar from '../TopBar/top-bar';
import UserInfo from './user-info';

import { AuthUserContext, withAuthorization } from '../Session';

const TopBarPlus = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <TopBar />

        <UserInfo authUser={authUser}/>

        <hr />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(TopBarPlus);
