import { useEffect, useState } from "react";
import firebase from 'firebase';

export function useAuthState() {
    const firestore = firebase.firestore();
    const [authState, setAuthState] = useState(firebase.auth().currentUser);
    if (authState == null) {

    }
    else {
        firestore.collection("Users").doc(authState.uid).get().then(data => {
            /// kiểm tra dữ liệu user tồn tại thì không cập nhật lại
            if (!data.exists) {
                firebase.firestore().collection("Users").doc(authState.uid).set({
                    id: authState.uid,
                    name: authState.displayName,
                    pictureURL: authState.photoURL,
                    OwnedCV:[],
                    CompanyList:[],


                })
            }
            else {

            }
        })
    }



    useEffect(() => {
        firebase.auth().onAuthStateChanged((state) => {
            setAuthState(state);
        })
    }, [authState]);
    return authState;
}