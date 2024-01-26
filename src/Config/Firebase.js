import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const Register = async (userInfo) => {

    try {
        const { email, password, age, fullname } = userInfo;
        await createUserWithEmailAndPassword(auth, email, password).then((res) => {
            alert('Register successfully');
            return res;
        })
        await addDoc(collection(db, 'users'), {
            fullname,
            age,
            email
        });
    } catch (e) {
        alert(e.message);
    }

}

const login = async (userInfo) => {

    try {
        const { email, password } = userInfo;
        return await signInWithEmailAndPassword(auth, email, password).then((res) => {
            alert('Login successfully');
            return res;
        })
    } catch (e) {
        alert(e.message);
        return e;
    }

}

const SellProduct = async (productInfo) => {

    try {
        const { name, price, description, quantity, image } = productInfo;
        const storageRef = ref(storage, `${image.name}`);
        await uploadBytes(storageRef, image)
        alert('image uploaded successfully')

        const url = await getDownloadURL(storageRef);

        await addDoc(collection(db, 'PostAds'), {
            name,
            price,
            description,
            quantity,
            imageUrl: url
        });
        alert('Successfully Ad post');
    } catch (e) {
        alert(e.message);
    }

}

const getDataFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, 'PostAds'));
    const ads = [];
    querySnapshot.forEach((doc) => {
        const ad = doc.data();
        ad.id = doc.id
        ads.push(ad);
    });
    return ads;
}

const userLogout = async () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        alert('Successfully logout!')
    }).catch((error) => {
        // An error happened.
    });
}

export {
    Register,
    login,
    SellProduct,
    getDataFromFirebase,
    userLogout
}