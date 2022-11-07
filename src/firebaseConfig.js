import { initializeApp } from "firebase/app";
import { getFirestore /* and maybe other things */ } from "firebase/firestore";
import { getAuth /* and maybe other things */ } from "firebase/auth";
// ... and do the same for other services you need

const firebaseConfig = {
  apiKey: "AIzaSyCz6IZZBmzuXwOAHTDaxIq66QU3ewqhmx0",
  authDomain: "blog-d4600.firebaseapp.com",
  projectId: "blog-d4600",
  storageBucket: "blog-d4600.appspot.com",
  messagingSenderId: "695093946474",
  appId: "1:695093946474:web:dee1cd4267cfa79c320213",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// ... and do the same for other services you need
