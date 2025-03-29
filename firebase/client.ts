// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDuGmcKx2hzuNJGQk1Zv4FCbp59zxEE46I',
  authDomain: 'pravaha-ai-mock-interview-prep.firebaseapp.com',
  projectId: 'pravaha-ai-mock-interview-prep',
  storageBucket: 'pravaha-ai-mock-interview-prep.firebasestorage.app',
  messagingSenderId: '687529590178',
  appId: '1:687529590178:web:a2847f4261d016bca6c6fb',
  measurementId: 'G-M2JR7KP1T3',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
