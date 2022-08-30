// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBUEXTCx2YArJDKhUDCsdAiK-HZxezn4Fc",
	authDomain: "havefun-6ea2e.firebaseapp.com",
	projectId: "havefun-6ea2e",
	storageBucket: "havefun-6ea2e.appspot.com",
	messagingSenderId: "528867477976",
	appId: "1:528867477976:web:4a06330e72edd8f2ce0aad",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

//init auth
const auth = getAuth();

export { db, auth };
