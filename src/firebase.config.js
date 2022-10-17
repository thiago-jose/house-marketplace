// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARY1jqiGB-RHr9pzQSnSWk6bcXXYN5s2c",
  authDomain: "house-marketplace-app-5cdf3.firebaseapp.com",
  projectId: "house-marketplace-app-5cdf3",
  storageBucket: "house-marketplace-app-5cdf3.appspot.com",
  messagingSenderId: "546798970707",
  appId: "1:546798970707:web:a1b9d14f4c15ec0218a3a6",
  measurementId: "G-83JWLR46XP"
};

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;