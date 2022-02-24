import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-u4EIuzPxRIfShmBuN2gcIaTcZmQ6s74",
  authDomain: "login-project-a65eb.firebaseapp.com",
  projectId: "login-project-a65eb",
  storageBucket: "login-project-a65eb.appspot.com",
  messagingSenderId: "614528749446",
  appId: "1:614528749446:web:37d9501017fab9e2a6e607"
};

var fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {fire,auth};