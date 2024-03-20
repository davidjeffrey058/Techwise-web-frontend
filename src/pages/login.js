import React from 'react'
import GoogleButton from '../components/googleButton'

const Login = () => {
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
            <form action="">
                <div className='field row'>
                    <i>email</i>
                    <input type="email" placeholder='Email' required />
                </div>
                <div className='field row'>
                    <i>lock</i>
                    <input type="password" placeholder='Password' required />
                </div>
                <p className='price_format'>Forgot Password?</p>
                <input type="submit" value="Login" className='add' />
            </form>
            <p style={{ margin: '10px 0', fontSize: '10px' }}>or</p>
            <GoogleButton />
        </div>
    )
}

export default Login