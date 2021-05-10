import React, { useContext, useState, useEffect } from 'react'
import {auth} from "../Config/Firebase"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    
    function logout() {
        return auth.signOut();
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail();
    }

    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePassword(password){
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscibe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscibe;
    }, [])

    const value = {
        currentUser,
        login, 
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value= {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
