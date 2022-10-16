// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDSKLZN8XFRZz6Gp8Esb94WogQ3p763JLo",
    authDomain: "maillit.firebaseapp.com",
    projectId: "maillit",
    storageBucket: "maillit.appspot.com",
    messagingSenderId: "739232648413",
    appId: "1:739232648413:web:9c1524e02d57afecd5df34",
    measurementId: "G-7PRN33NFC4"
};
const firebaseApp= firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore();
const auth=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider}
