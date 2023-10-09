import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4nQdzGSFR78rFnv0YdKQG1YyE4-hkY1Q",
  authDomain: "game-manegment.firebaseapp.com",
  projectId: "game-manegment",
  storageBucket: "game-manegment.appspot.com",
  messagingSenderId: "5783640912",
  appId: "1:5783640912:web:6c54adf63f16f97f372a55"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);