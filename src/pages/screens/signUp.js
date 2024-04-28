import React, { useState } from 'react'
import GoogleButton from '../../components/googleButton';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../services/firebase';
import addUser from '../../methods/addUser';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signUp = (event) => {
        setIsLoading(true);
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name
                });
                addUser(user);
            }).then(() => {
                setIsLoading(false);
            }).catch((error) => {
                alert(error.message)
                setIsLoading(false);
            })
    }
    return (
        <div className='column auth_cont'>
            <h2>Create Account</h2>
            <p className='section_text'>Create a new account</p>
            <form onSubmit={isLoading ? () => { } : signUp}>
                <div className='field row'>
                    <i className='material-symbols-outlined'>person</i>
                    <input type="name" placeholder='Full Name'
                        required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='field row'>
                    <i className='material-symbols-outlined'>email</i>
                    <input type="email" placeholder='Email' required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='field row'>
                    <i className='material-symbols-outlined'>phone</i>
                    <input type="phone" placeholder='Phone' />
                </div>
                <div className='field row'>
                    <i className='material-symbols-outlined'>lock</i>
                    <input type="password" placeholder='Password' required
                        value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} />
                </div>

                {/* The sign up button */}
                <button className="add" type='submit'
                    style={{
                        backgroundColor: isLoading ? '#d0d0d0' : '',
                        boxShadow: isLoading ? 'none' : ''
                    }}>Sign up</button>
            </form>
            <p style={{ margin: '10px 0', fontSize: '10px' }}>you can also</p>
            <GoogleButton />
        </div>
    )
}

export default SignUp