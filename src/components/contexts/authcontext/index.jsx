import {auth} from "../../firebase/firebase";
import React, { useState, useEffect , useContext} from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext(); 

export function AuthProvider({ children }) {
    const [currentUser , setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(auth , initializeUser);
        return unsubscribe;
    } , []);

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            setIsLoggedIn(true);
        } else{
            setCurrentUser(null);
            setIsLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        isLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}