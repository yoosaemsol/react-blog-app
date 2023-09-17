import { initializeApp, FirebaseApp, getApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export let app: FirebaseApp;
let auth: any;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

try {
  app = getApp('app');
  auth = getAuth(app);
} catch (e) {
  app = initializeApp(firebaseConfig, 'app');
  auth = getAuth(app);
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default firebase;

export async function logout() {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user?.user;
  } catch (e: any) {
    throw new Error(e?.code); //auth/invalid-login-credentials
  }
}

export async function signup(email: string, password: string) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user?.user;
  } catch (e: any) {
    throw new Error(e?.code); //auth/email-already-in-use
  }
}
