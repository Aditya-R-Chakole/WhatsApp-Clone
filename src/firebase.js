import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCckUQ5KAHb0F3_NEVe2YJC7vyc3jO7jTs",
  authDomain: "whatsapp-clone-c25b2.firebaseapp.com",
  projectId: "whatsapp-clone-c25b2",
  storageBucket: "whatsapp-clone-c25b2.appspot.com",
  messagingSenderId: "140257443041",
  appId: "1:140257443041:web:728641ab792475d9140ba0",
  measurementId: "G-EZBVZT7WRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;