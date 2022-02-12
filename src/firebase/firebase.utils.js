import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config =  {
    apiKey: "AIzaSyDmZqPc5l8WHay9g6LqCCafc6vxp20vhcA",
    authDomain: "hustlersv2.firebaseapp.com",
    projectId: "hustlersv2",
    storageBucket: "hustlersv2.appspot.com",
    messagingSenderId: "128378969478",
    appId: "1:128378969478:web:888fab1cb6a9fdce976007",
    measurementId: "G-17DQLJTT8E"
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;