import firebase from "firebase/compat/app";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyBlR7iu9IRBns2pCi8Bl_zkKX5oYabXZQc",
  authDomain: "e7-manager-auth-development.firebaseapp.com",
  projectId: "e7-manager-auth-development",
  storageBucket: "e7-manager-auth-development.appspot.com",
  messagingSenderId: "654103381",
  appId: "1:654103381:web:81a54981fd4224593615dc"
})

export const auth = app.auth()
export default app
