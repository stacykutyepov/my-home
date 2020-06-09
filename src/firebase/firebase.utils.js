import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA36n9pW0IWzVs3uRkALQq3pxChhLrUrw8",
    authDomain: "crown-db-10911.firebaseapp.com",
    databaseURL: "https://crown-db-10911.firebaseio.com",
    projectId: "crown-db-10911",
    storageBucket: "crown-db-10911.appspot.com",
    messagingSenderId: "410094600829",
    appId: "1:410094600829:web:ae8a8f5c7d4572d4582714",
    measurementId: "G-C84VQTF2YW"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;