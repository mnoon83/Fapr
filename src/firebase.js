import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBWt_oz75WQmgEAGpQefVkiLFsc6sDpnK4",
  authDomain: "fapr-9b5b3.firebaseapp.com",
  projectId: "fapr-9b5b3",
  storageBucket: "fapr-9b5b3.appspot.com",
  messagingSenderId: "777695181596",
  appId: "1:777695181596:web:52e6c88d50591ae16058d9",
  measurementId: "G-EL24HZMTM6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);