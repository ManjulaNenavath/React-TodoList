// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVQij6m37dfrSwxrkGaAkJTRoAmPK9gKY",
    authDomain: "todoapp-57283.firebaseapp.com",
    projectId: "todoapp-57283",
    storageBucket: "todoapp-57283.appspot.com",
    messagingSenderId: "578336731690",
    appId: "1:578336731690:web:0334e31f03556ef1f40953",
    measurementId: "G-4HBQ2LYG0T"
  });
  
   const db = firebaseApp.firestore();
   export default db;
  
