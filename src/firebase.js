import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZ85UHWWrLsp_7_32R7EmABx3kHaQKhQs",
  authDomain: "lunch-rush-7056c.firebaseapp.com",
  databaseURL: "https://lunch-rush-7056c.firebaseio.com",
  projectId: "lunch-rush-7056c",
  storageBucket: "lunch-rush-7056c.appspot.com",
  messagingSenderId: "773925389846"};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
