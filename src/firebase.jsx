import firebase from 'firebase/';

const firebaseConfig = {
  apiKey: "AIzaSyB8HEMBwGrhA8hXMpJyn4X-k3sDmBQSo4c",
  authDomain: "clone-acb38.firebaseapp.com",
  projectId: "clone-acb38",
  storageBucket: "clone-acb38.appspot.com",
  messagingSenderId: "621619652927",
  appId: "1:621619652927:web:f9cd98e1f88ad8c77ccb8a",
  measurementId: "G-DX26STP7T0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };