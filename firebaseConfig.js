import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBITK6bH07_JazvXdWiAoN8f_zn08qr3kk",
  authDomain: "alu-goals.firebaseapp.com",
  projectId: "alu-goals",
  storageBucket: "alu-goals.firebasestorage.app",
  messagingSenderId: "673913216257",
  appId: "1:673913216257:web:f8ba161e2897a8eb148f00"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//yo

