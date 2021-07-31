import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcaDwvLOn29B9cOJJaQ0swIJ4XvjGr8N4",
  authDomain: "crwn-db-7373e.firebaseapp.com",
  projectId: "crwn-db-7373e",
  storageBucket: "crwn-db-7373e.appspot.com",
  messagingSenderId: "268706216445",
  appId: "1:268706216445:web:dd3acfa5b6f91d09e14194",
  measurementId: "G-RBB4B2G5QR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
