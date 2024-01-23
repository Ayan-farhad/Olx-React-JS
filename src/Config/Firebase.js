import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZT0DbwREfqYXXW9kymQCjbAATsT8ZwRw",
    authDomain: "practice-bf0b9.firebaseapp.com",
    projectId: "practice-bf0b9",
    storageBucket: "practice-bf0b9.appspot.com",
    messagingSenderId: "1096527925008",
    appId: "1:1096527925008:web:6fa74151fd36e0e7371f95",
    measurementId: "G-7EV7ZHJSCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const Register = (userInfo) => {
    const { email, password, age, fullname } = userInfo;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('Register Successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

const login = (userInfo) => {
    const {email,password} = userInfo;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login saccessfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

export {
    Register,
    login
}