import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNrhkTc2lknYhSQab6jDwUSkSL6ISC6KM",
  authDomain: "booking-2b8d8.firebaseapp.com",
  projectId: "booking-2b8d8",
  storageBucket: "booking-2b8d8.appspot.com",
  messagingSenderId: "577894737159",
  appId: "1:577894737159:web:67867938891798573e11a2",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
