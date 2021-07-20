import './HomePage.css';
import firebase from 'firebase/app';
import { useAuthState } from '../../hooks/auth.hook';
import { Button } from 'rmwc';

export function HomePage(){

    const authState = useAuthState();

    function login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    function logout(){
        firebase.auth().signOut();
    }

    if(authState != null){
        return (
            <div style={{'padding':'3rem 1rem 0 1rem'}}>
                <h1>Welcome {authState.displayName}</h1>
                <Button raised onClick={logout}>Logout</Button>
            </div>
        )
    }
    return (
      <div style={{'padding':'3rem 1rem 0 1rem'}}>
         <h1>Let's build your CV by joining with us</h1>
         <Button raised onClick={login}>Login</Button>
      </div>
    )
}