
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBDnLwzOCKu6o5tG6JirxsXxAB9dCSqZ1M",
  authDomain: "ecommerce-vicente.firebaseapp.com",
  projectId: "ecommerce-vicente",
  storageBucket: "ecommerce-vicente.appspot.com",
  messagingSenderId: "197425409796",
  appId: "1:197425409796:web:f06ae7065b18fb91f96a51"
};
  
  export default firebaseConfig;
  


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  