import React, { Component } from 'react';
import SignOut from '../SignOut/index';

import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import user_img from '../../images/user-img.png';
import xp_icon from '../../images/xp-icon.png';

import german_icon from '../../images/german.png'
import hindi_icon from '../../images/hindi.png'
import irish_icon from '../../images/irish.png'
import english_icon from '../../images/english.png'
import arabic_icon from '../../images/arabic.png'
import spanish_icon from '../../images/spanish.png'
import welsh_icon from '../../images/welsh.png'

class UserInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        users: [],
        this_username: "",
        language: ""
      };
    }
    componentDidMount() {
      this.setState({ loading: true });
      this.props.firebase.users().on('value', snapshot => {
        const usersObject = snapshot.val();
        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key
        }));
        const currentUID = this.props.authUser.uid;
        let currentUser = usersList.find(user => user.uid === currentUID);
        this.setState({
          users: usersList,
          loading: false,
          this_username: currentUser.username,
          language: currentUser.learnlang
        });
      });
    }
    componentWillUnmount() {
      this.props.firebase.users().off();
    }

    renderTooltip = (props) => {
      return <Tooltip {...props}>Account Page</Tooltip>;
    }
  
    render() {
        const { this_username } = this.state;
        let language = this.state.language.toLowerCase();
        let images = {
          irish: irish_icon,
          german: german_icon,
          english: english_icon,
          hindi: hindi_icon,
          arabic: arabic_icon,
          welsh: welsh_icon,
          spanish: spanish_icon
        }
      return (
        <div class="d-inline-block float-right">
          <div class="d-inline-block mt-3 mr-5">
            <Link to={{pathname: '/home'}}>
              <button>Home</button>
            </Link>
          </div>
          <div class="d-inline-block float-right mt-3 mr-5">
            {language !== "" && <img src={images[language]} width="50px" class="ml-2 mr-4" alt="flag icon"/>}
            59
            <img src={xp_icon} width="40px" class="ml-2 mr-4" alt="xp icon"/>
            Hi, {this_username != "" && this_username}
            <Link to={{pathname: '/account'}}>
              <OverlayTrigger
                placement="bottom"
                overlay={this.renderTooltip}
              >
                <img src={user_img} width="40px" class="ml-3 mr-3" alt="user image"/>
              </OverlayTrigger>
            </Link>
  
            <SignOut />
          </div>
        </div>
      );
    }
  }

  export default withFirebase(UserInfo);