import { signInWithPopup, GoogleAuthProvider, } from 'firebase/auth'
import React from 'react';
import auth from '../services/firebase';
import addUser from '../methods/addUser';

const GoogleButton = ({ width }) => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((userCredential) => {
                const user = userCredential.user;
                addUser(user);
            })
            .catch((error) => {
                alert('Couldn\'t sign in');
            })
    }

    return (
        <button className='hover' style={{
            width: width || '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '8px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #d0d0d0'
        }} onClick={signInWithGoogle}>
            <div className="row">
                <img src="assets/google.png" alt="google" width={'30px'} style={{ marginRight: '10px' }} />
                <p>Continue with google</p>
            </div>
        </button >
    )
}

export default GoogleButton