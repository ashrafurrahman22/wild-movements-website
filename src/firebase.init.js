// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvRjOKO9102hsTnFyyaugJLzlbdim6dAA",
  authDomain: "wild-movements.firebaseapp.com",
  projectId: "wild-movements",
  storageBucket: "wild-movements.appspot.com",
  messagingSenderId: "824948622964",
  appId: "1:824948622964:web:31142d3064a5968fd0b321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;