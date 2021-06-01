import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZr6U4Z9lu3pWXVbnDYu9-Zi-lTqIu3uI",
    authDomain: "disney-plus-clone-cd4fb.firebaseapp.com",
    projectId: "disney-plus-clone-cd4fb",
    storageBucket: "disney-plus-clone-cd4fb.appspot.com",
    messagingSenderId: "777367825737",
    appId: "1:777367825737:web:c5a727a7299ce541353e98"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;