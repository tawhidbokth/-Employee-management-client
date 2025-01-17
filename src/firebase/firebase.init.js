import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAcbjF0FpjD3sPnbOH-hAE6aAhjl4QHfN4',
  authDomain: 'employee-managment-2a8b8.firebaseapp.com',
  projectId: 'employee-managment-2a8b8',
  storageBucket: 'employee-managment-2a8b8.firebasestorage.app',
  messagingSenderId: '30619184166',
  appId: '1:30619184166:web:2939c60e0beaf343d34ae7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
