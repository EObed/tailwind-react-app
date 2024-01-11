import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAG2bcMHwe0_Rn2PYrnSB_Z6eL8e2WKejI",
    authDomain: "fir-project-1-2ece4.firebaseapp.com",
    projectId: "fir-project-1-2ece4",
    storageBucket: "fir-project-1-2ece4.appspot.com",
    messagingSenderId: "20555709671",
    appId: "1:20555709671:web:e08e30ca6b23d325357642",
    measurementId: "G-W1H4Z3W0WF"
  };

const app = initializeApp(firebaseConfig);

export const dataBase1 = getFirestore(app)