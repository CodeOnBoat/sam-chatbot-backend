import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7TO2Ilx26uppszDwdeDob_Nvcy6LXe-Y",
  authDomain: "samchat-b3deb.firebaseapp.com",
  projectId: "samchat-b3deb",
  storageBucket: "samchat-b3deb.appspot.com",
  messagingSenderId: "492051323748",
  appId: "1:492051323748:web:a5a23a596e9d392e643871",
  measurementId: "G-8FZBEH72C3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
