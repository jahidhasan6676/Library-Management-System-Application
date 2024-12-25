import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext/AuthContext';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();



    // user signUp
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // user signIn
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // signIn google
    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    //  user update profile
    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }


    // observation setup
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
           
                setUser(currentUser);
                // console.log("observe" ,currentUser?.email)

                if(currentUser?.email){
                    const user = {email: currentUser?.email};
                    axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {withCredentials: true})
                    .then(res => {
                        // console.log("signIn", res.data);
                        setLoading(false);
                    })
                }
                else{
                    axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {withCredentials: true})
                    .then(res => {
                        // console.log("logout", res.data);
                        setLoading(false);
                    })
                }
          
            
            return () => {
                unSubscriber();
            }
        })
    }, [])


    const authInfo ={
        user,
        setUser,
        createUser,
        loginUser,
        signOutUser,
        signInGoogle,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;