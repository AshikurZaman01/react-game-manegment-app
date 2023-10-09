import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Components/firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>
    {
       // google login
       setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>
    {       
        //sign up
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =  (email, password) =>
    {
        //sign in
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=> {
        setLoading(true);
        return signOut(auth) 
    }

    useEffect(()=>
    {
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setLoading(false);
                setUser(user);
                console.log("user is logged in");
            }
            else
            {
                console.log("user is logged out");
            }
        })
    },[])


    const authInfo = {googleLogin , createUser , signInUser , logOut , user , loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;