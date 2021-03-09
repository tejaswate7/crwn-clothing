import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyByehzNeDnGO74ohOL3UGfX2OznhL2m17w",
    authDomain: "crwn-db-fed66.firebaseapp.com",
    projectId: "crwn-db-fed66",
    storageBucket: "crwn-db-fed66.appspot.com",
    messagingSenderId: "113999448804",
    appId: "1:113999448804:web:74fe76aa4078f184e3baf1",
    measurementId: "G-2HTLY052KY"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;