import * as firebase from 'firebase';

const config   = {
  apiKey: "AIzaSyC-OlfQBQb1lXLNlz9ovOfZmchviPj3rOk",
  authDomain: "lex-augur.firebaseapp.com",
  databaseURL: "https://lex-augur.firebaseio.com",
  projectId: "lex-augur",
  storageBucket: "lex-augur.appspot.com",
  messagingSenderId: "999819639344",
  appId: "1:999819639344:web:aabc1b84b14550dcbf0bf5",
  measurementId: "G-6K945M5EVK"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');