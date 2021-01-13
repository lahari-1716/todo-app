import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDAYcUbZfOkNNtSXxuBTG7jZwryQnIlfhY",
  authDomain: "todo-app-69efb.firebaseapp.com",
  databaseURL: "https://todo-app-69efb-default-rtdb.firebaseio.com",
  projectId: "todo-app-69efb",
  storageBucket: "todo-app-69efb.appspot.com",
  messagingSenderId: "760877124969",
  appId: "1:760877124969:web:2733a0d55ee4861102c1f8",
  measurementId: "G-YYLLBRCZ86",
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase.firestore();
export default fire;
