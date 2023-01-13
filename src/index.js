import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyBAS7qgz545y7Y8OSsy5G765BRaj25CCyY",
  //authDomain: "todo-list-8fb5c.firebaseapp.com",
  //projectId: "todo-list-8fb5c",
  //storageBucket: "todo-list-8fb5c.appspot.com",
  //messagingSenderId: "826033999977",
  //appId: "1:826033999977:web:177e013e4843367f1512f8"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
