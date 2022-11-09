import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1G3QEwVt6ol4gay94Ztuu8THcuMcfxI0",
  authDomain: "truonggiangproject.firebaseapp.com",
  projectId: "truonggiangproject",
  storageBucket: "truonggiangproject.appspot.com",
  messagingSenderId: "596399165641",
  appId: "1:596399165641:web:07401bcc58e3d40d273d18",
  measurementId: "G-J4Q2X1RRFZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
