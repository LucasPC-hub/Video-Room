/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// noinspection ES6UnusedImports

import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfNA3oU_kb0F8kgfzGyL-ohkHSUo5Of3k",
    authDomain: "video-rooms.firebaseapp.com",
    projectId: "video-rooms",
    storageBucket: "video-rooms.appspot.com",
    messagingSenderId: "823251961688",
    appId: "1:823251961688:web:d8c7629549e79cd7da872d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)