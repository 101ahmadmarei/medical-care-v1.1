import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {  } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDunaIrm9PfbBBlSKmazXcQK_h_1Y8GwZo",
  authDomain: "ejada1-46346.firebaseapp.com",
  databaseURL: "https://ejada1-46346-default-rtdb.firebaseio.com",
  projectId: "ejada1-46346",
  storageBucket: "ejada1-46346.appspot.com",
  messagingSenderId: "380765055410",
  appId: "1:380765055410:web:533de5e5faf786742f5cab",
  measurementId: "G-F4WQQFSZ8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

