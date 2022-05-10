// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC34q0FQAFtI3UUBtn70zDipJQrtwPE8ns',
  authDomain: 'gwnu-m.firebaseapp.com',
  projectId: 'gwnu-m',
  storageBucket: 'gwnu-m.appspot.com',
  messagingSenderId: '944263527411',
  appId: '1:944263527411:web:3949a8ce1d1cf25d9c7086',
  measurementId: 'G-QW697EK4RP',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
