import { initializeApp } from 'firebase/app'
import { doc, getFirestore } from 'firebase/firestore'

//app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDqmauU4vDKdpWfzWtIlWMCLHaHTN24qkI",
    authDomain: "recipeapp-e2dc3.firebaseapp.com",
    projectId: "recipeapp-e2dc3",
    storageBucket: "recipeapp-e2dc3.appspot.com",
    messagingSenderId: "1085267020376",
    appId: "1:1085267020376:web:7639da4aa82310a3cd582d"
};

// Initialize Firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//docRef
export const docRef = doc(db, 'meals', 'sigzQZNhenrRaBJ8tM0Q')