import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import {Auth} from './firebase-config';


const AuthContext = React.createContext({});


const AuthContextProvider:React.FC<{children:ReactNode}> = ({children})=> {
    const [user,setUser]= useState<User|null>();

    const login = (email:string,password:string)=>{
        signInWithEmailAndPassword(Auth,email,password)
    }
    const signUp = (email:string,password:string)=>{
        createUserWithEmailAndPassword(Auth,email,password)
    }
    const logOut = ()=>{
        return signOut(Auth)
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth,(currentUser)=>{
            console.log("Auth", currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        };
    },[])
    return <AuthContext.Provider value={{user,login,logOut,signUp}}>{children}
    </AuthContext.Provider>
}

export default AuthContextProvider;

export function useUserAuth () {
return useContext(AuthContext)
}