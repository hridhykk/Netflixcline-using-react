
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc, collection,getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBg79Qmc5P9HxnLH4OCEK5FdWMPDL2Scmg",
  authDomain: "netflix-clone-a08be.firebaseapp.com",
  projectId: "netflix-clone-a08be",
  storageBucket: "netflix-clone-a08be.appspot.com",
  messagingSenderId: "961211590562",
  appId: "1:961211590562:web:ab44be35ee7c4f49b274fb",
  measurementId: "G-5HJKV8V7JR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
try{
const res = await createUserWithEmailAndPassword(auth,email,password);
const user =res.user;
await addDoc(collection(db,'user'),{
  uid:user.uid,
  name,
  authProvider:'local',email,
});
}catch(error){
console.log(error.message);

 toast.error(error.code.split('/')[1].split('-').join(''));
}
}

const login = async (email,password)=>{
try{
await signInWithEmailAndPassword(auth,email,password)
}catch(error){
console.log(error);

  toast.error(error.code.split('/')[1].split('-').join(''));
}
}

const Logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
    })
    .catch((error) => {
        toast.error(error.code.split('/')[1].split('-').join(''));
      console.error("Error signing out: ", error);
    });
};

export {auth,db,login,signup,Logout}
