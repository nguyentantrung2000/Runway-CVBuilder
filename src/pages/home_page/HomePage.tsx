import './HomePage.css';
import firebase from 'firebase/app';
import { useAuthState } from '../../hooks/auth.hook';
import { Avatar, Button, Icon } from 'rmwc';
import firestore from'@react-firebase/firestore'

export const HomePage=()=> {
    const authState = useAuthState();
    const gIcon = <Icon
        icon={{
            strategy: 'component',
            icon: (
                <svg
                    style={{ width: '24px', height: '24px' }}
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#ffffff"
                        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                    />
                </svg>
            )
        }}
    />
    function login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    function logout() {
        firebase.auth().signOut();
    }

    if (authState != null) {
        return (
            <div>
                {/* <h1>Welcome {authState.displayName}</h1> */}
                <Button raised onClick={logout} label="Logout" icon={
                    <Avatar name={authState.displayName??""} />
                }></Button>
            </div>
        )
    }
    return (
        <div >
            {/* <h1>Let's build your CV by joining with us</h1> */}
            <Button raised onClick={login} icon={gIcon}>Login</Button>
        </div>
    )
}