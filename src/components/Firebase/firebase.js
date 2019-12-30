import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8GLvfzjI43iBseF9oxj5mhJovtTwwk_k",
  authDomain: "autoclock-10615.firebaseapp.com",
  databaseURL: "https://autoclock-10615.firebaseio.com",
  projectId: "autoclock-10615",
  storageBucket: "autoclock-10615.appspot.com",
  messagingSenderId: "927546364363",
  appId: "1:927546364363:web:5ffdb6b7d9f0fbb6e1664e"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    
  }
  doSignIn = () => {
    var provider = new app.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider).catch(err => {
      var errorCode = err.code;
      var errorMessage = err.message;
      var email = err.email;
      var creds = err.credential;

      console.error(`Error Code: ${errorCode} was thrown: ${errorMessage}`);
      console.error(`Affected Email: ${email} using creds: ${creds}`);
    })
  }
  doSignOut = () => this.auth.signOut();
}

export default Firebase;