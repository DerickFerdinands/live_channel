// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdkruGEEb4bWFLg3z0FdjasZ00ujOHDyk",
    authDomain: "live-chanel-5389a.firebaseapp.com",
    projectId: "live-chanel-5389a",
    storageBucket: "live-chanel-5389a.appspot.com",
    messagingSenderId: "995000345953",
    appId: "1:995000345953:web:85167163f3581d21785120",
    measurementId: "G-CQPNDCXLBQ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
