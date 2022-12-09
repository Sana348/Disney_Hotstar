import firebase from 'firebase/app';
import firebase1 from 'firebase';
//import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS72qL70I9hhLQDRG8eq1sDV6ijGhXtkw",
  authDomain: "disney-hotstar-be62d.firebaseapp.com",
  projectId: "disney-hotstar-be62d",
  storageBucket: "disney-hotstar-be62d.appspot.com",
  messagingSenderId: "659136788904",
  appId: "1:659136788904:web:7564c1c29d3a438cb5059d",
  measurementId: "G-8YCEN7D5NY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//console.log(db)
const auth = firebase1.auth();
const provider = new firebase1.auth.GoogleAuthProvider();
const storage = firebase1.storage();


export { auth, provider, storage };

export default db;
