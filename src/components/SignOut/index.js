import React from 'react';
import { withFirebase } from '../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SignOutButton = ({ firebase }) => (
  <Button variant="outline-warning" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);
export default withFirebase(SignOutButton);