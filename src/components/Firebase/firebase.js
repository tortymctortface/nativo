import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADM-ZpaFkfUMb3oKEbboh6ELmS3C8V4Q8",
  authDomain: "nativo-c2349.firebaseapp.com",
  databaseURL: "https://nativo-c2349.firebaseio.com",
  projectId: "nativo-c2349",
  storageBucket: "nativo-c2349.appspot.com",
  messagingSenderId: "870695746474",
  appId: "1:870695746474:web:6c030ecfff7066e47109d3",
  measurementId: "G-7LJ2DJGVG0"
};

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
export default Firebase;