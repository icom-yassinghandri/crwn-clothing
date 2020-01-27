import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3-8Iia5QyQncDnW4fw3Cg2_Rvk9HiZ1s",
    authDomain: "crwn-db-63b21.firebaseapp.com",
    databaseURL: "https://crwn-db-63b21.firebaseio.com",
    projectId: "crwn-db-63b21",
    storageBucket: "crwn-db-63b21.appspot.com",
    messagingSenderId: "483307202482",
    appId: "1:483307202482:web:eed9795ca1d692f09026ab",
    measurementId: "G-XT6Q30LTZH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;