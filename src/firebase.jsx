import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSkGxLY85Ujnq4Kjs-Co0KVmNcXvPtkg4",
  authDomain: "clone-b9b0c.firebaseapp.com",
  projectId: "clone-b9b0c",
  storageBucket: "clone-b9b0c.appspot.com",
  messagingSenderId: "573139743755",
  appId: "1:573139743755:web:48cf38b1255b141a24c30e",
  measurementId: "G-1X7CJG8L89"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };