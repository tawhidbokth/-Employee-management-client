import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Firestore ইমপোর্ট

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Firebase ইনিশিয়ালাইজ
const app = initializeApp(firebaseConfig);

// auth ও firestore এক্সপোর্ট
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore ইনিশিয়ালাইজ
