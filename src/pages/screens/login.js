import React, { useState } from 'react'
import GoogleButton from '../../components/googleButton'
import auth from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signIn = (event) => {
        setIsLoading(true);
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.message)
            })
    }



    return (
        <div className='column auth_cont'>
            <div
                style={{
                    width: '80px',
                    aspectRatio: '1',
                    border: '4px solid #d0d0d0',
                    alignSelf: 'center',
                    borderRadius: '50%'
                }}></div>
            <h2>Welcome Back</h2>
            <p className='section_text'>Sign in to continue</p>
            <form onSubmit={isLoading ? () => { } : signIn}>
                {/* The email input field section */}
                <div className='field row'>
                    <i className='material-symbols-outlined'>email</i>
                    <input
                        type="email" placeholder='Email'
                        required value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* The password input field section */}
                <div className='field row'>
                    <i className='material-symbols-outlined'>lock</i>
                    <input type="password" placeholder='Password'
                        required value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <p className='price_format'>Forgot Password?</p>

                {/* The Login button */}
                <button className="add" type='submit'
                    style={{
                        backgroundColor: isLoading ? '#d0d0d0' : '',
                        boxShadow: isLoading ? 'none' : ''
                    }}>Login</button>
            </form>
            <p style={{ margin: '10px 0', fontSize: '10px' }}>or</p>
            <GoogleButton />
        </div>
    )
}

export default Login