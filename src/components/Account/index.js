import React, { Component } from 'react';
import TopBarPlus from '../TopBarPlus/top-bar-plus';
import LanguageCard from '../LanguageCard/index';
import FriendCard from '../FriendCard/index';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import { AuthUserContext, withAuthorization } from '../Session';

import user_img from '../../images/user-img.png';


const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <TopBarPlus />

        <div class="d-inline-block float-left ml-5">
          <img src={user_img} width="100px" class="ml-3 mr-3" alt="user image"/>

          <h3 class="d-inline-block">{authUser.email}</h3>
          <div class="mt-4">
            <h5>Want to change password?</h5>
            <PasswordChangeForm />
          </div>
        </div>

        <div class="d-inline-block float-right w-50 mr-5">
          <LanguageCard />
          <FriendCard />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);