import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD27SlCEs3CVTqNicioQ_34XFohWGBfL18",
    authDomain: "planmytrip-a60f6.firebaseapp.com",
    databaseURL: "https://planmytrip-a60f6.firebaseio.com",
    projectId: "planmytrip-a60f6",
    storageBucket: "planmytrip-a60f6.appspot.com",
    messagingSenderId: "548400696542",
    appId: "1:548400696542:web:1e0d7d38b50078437d064f",
    measurementId: "G-64FX8JVNPV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
