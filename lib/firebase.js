import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: AIzaSyCKWZk0ehAkiwDcBRz7DrEdrVaqEwP3L2I,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
