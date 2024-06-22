import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPprNZXyDHwhC-kqE76mJMormK-Cqc67g",
  authDomain: "proyecto-react-coder-49877.firebaseapp.com",
  projectId: "proyecto-react-coder-49877",
  storageBucket: "proyecto-react-coder-49877.appspot.com",
  messagingSenderId: "94397203054",
  appId: "1:94397203054:web:b92ba24971f6d8c0125c7f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)