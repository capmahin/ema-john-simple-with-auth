// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFN-9QN7V4KM19zJEe3kd_3SSzTbgedU",
  authDomain: "ema-john-simple-93199.firebaseapp.com",
  projectId: "ema-john-simple-93199",
  storageBucket: "ema-john-simple-93199.appspot.com",
  messagingSenderId: "833606227499",
  appId: "1:833606227499:web:fe774918a59ed5023c3c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
