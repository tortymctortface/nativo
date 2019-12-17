import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import german_icon from '../../images/german.png'
import hindi_icon from '../../images/hindi.png'
import irish_icon from '../../images/irish.png'
import english_icon from '../../images/english.png'
import arabic_icon from '../../images/arabic.png'
import spanish_icon from '../../images/spanish.png'
import welsh_icon from '../../images/welsh.png'

class WordOfTheDayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ""
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
        language: currentUser.learnlang
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

    render() {
      let language = this.state.language.toLowerCase();
      const words = {
        irish: {
          word: "Fáilte",
          desc: "This word also translates to ‘joy, bliss or happiness’, but is mostly used to say ‘welcome’.",
          pronounce: "Pronounce it like this: fawl-cha"
        },

        english: {
          word: "Umbrella",
          desc: "A device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain.",
          pronounce: "Pronounce it like this: uhm-breh-la"
        },

        welsh: {
          word: "Balŵn",
          desc: "A small coloured rubber bag which is inflated with air and then sealed at the neck, used as a child's toy or a decoration.",
          pronounce: "Pronounce it like this: bahl-un"
        },

        spanish: {
          word: "Nevado",
          desc: "This word means 'snowy'.",
          pronounce: "Pronounce it like this: nev-a-doh"
        },

        hindi: {
          word: "रोशनदान",
          desc: "This word means 'skylight'",
          pronounce: "Pronounce it like this: ro-shan-a-daan"
        },

        arabic: {
          word: "إن شاء الله‎,",
          desc: "the Arabic language expression for 'God willing' or 'if God wills'. The phrase is commonly used by Muslims, Arab Christians, and Arabic-speakers of other religions to refer to events that one hopes will happen in the future.",
          pronounce: "Pronounce it like this: in-sha-all-ha‎"
        },

        german: {
          word: "Unkaputtbar",
          desc: "It basically means 'unbreakable' or 'indestuctible' and is a very new addition to the German language.",
          pronounce: "Pronounce it like this: un‧ka‧putt‧bar"
        },
 	french: {
          word: "Anodin",
          desc: "This word means 'Harmless'",
          pronounce: "Pronounce it like this: anodi-ne"
        }


      };

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
        <div class="d-inline-block ml-5"> 
          <Card style={{width: '35rem'}}>
            <Card.Header as="h5">
                {language !== "" && <img class="d-inline-block float-left mt-1 mr-2" src={images[language]} width="25px"/>}
                Word Of the Day - {this.state.language}
            </Card.Header>
            <Card.Body>
              <div class="d-inline-block">
                <Card.Title>{language !== "" && words[language].word}</Card.Title>
                <Card.Text>
                {language !== "" && words[language].desc}

                <br /> <br />

                {language !== "" && words[language].pronounce}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  export default withFirebase(WordOfTheDayCard);
