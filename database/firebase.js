// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_pMVlbbsVyE0Rv9qGoc7itRRi_4Ayl1A",
  authDomain: "mshop-c8cb6.firebaseapp.com",
  projectId: "mshop-c8cb6",
  storageBucket: "mshop-c8cb6.appspot.com",
  messagingSenderId: "404059032945",
  appId: "1:404059032945:web:4234f5b6112039f17bfad0",
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

export { firebase };
