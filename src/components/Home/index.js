import React from 'react';
import { withAuthorization } from '../Session';

import TopBarPlus from '../TopBarPlus/top-bar-plus';

const HomePage = () => (
  <div>
    <TopBarPlus />
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);