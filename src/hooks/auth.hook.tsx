import { useEffect, useState } from "react";
import firebase from 'firebase';

export function useAuthState(){
    const [authState, setAuthState] = useState(firebase.auth().currentUser);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((state)=>{
            setAuthState(state);
        })
    },[authState]);
    return authState;
}