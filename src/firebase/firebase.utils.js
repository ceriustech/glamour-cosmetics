import firebase from 'firebase/app'; 

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYiR20C1pPQW_MF6q0uAcFis-Cp4yRqz8",
    authDomain: "glamour-cosmetics.firebaseapp.com",
    databaseURL: "https://glamour-cosmetics.firebaseio.com",
    projectId: "glamour-cosmetics",
    storageBucket: "glamour-cosmetics.appspot.com",
    messagingSenderId: "953319897021",
    appId: "1:953319897021:web:dbb2109d14df245eda84d4",
    measurementId: "G-EXGV2TB1SW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth(); 

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider); 

  export default firebase; 