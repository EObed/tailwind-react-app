import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "fir-project-1-2ece4",
    storageBucket: "fir-project-1-2ece4.appspot.com",
    messagingSenderId: "20555709671",
    appId: "1:20555709671:web:e08e30ca6b23d325357642",
    measurementId: "G-W1H4Z3W0WF"
  };

const app = initializeApp(firebaseConfig);

export const dataBase1 = getFirestore(app)