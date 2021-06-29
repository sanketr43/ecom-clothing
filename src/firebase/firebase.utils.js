import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCaxeiY_Qe37KMcbyw_ajDCgmaHpc8QjtE",
    authDomain: "ecom-clothing-469da.firebaseapp.com",
    projectId: "ecom-clothing-469da",
    storageBucket: "ecom-clothing-469da.appspot.com",
    messagingSenderId: "790505019306",
    appId: "1:790505019306:web:53bc7613721fc9613b7dd3"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

