import React from 'react'
import GoogleButton from '../components/googleButton'

const SignUp = () => {
    return (
        <div className='column auth_cont'>
            <h2>Create Account</h2>
            <p className='section_text'>Create a new account</p>
            <form action="">
                <div className='field row'>
                    <i>person</i>
                    <input type="name" placeholder='Full Name' required />
                </div>
                <div className='field row'>
                    <i>email</i>
                    <input type="email" placeholder='Email' required />
                </div>
                <div className='field row'>
                    <i>phone</i>
                    <input type="phone" placeholder='Phone' required />
                </div>
                <div className='field row'>
                    <i>lock</i>
                    <input type="password" placeholder='Password' required />
                </div>
                <input type="submit" value="Sign Up" className='add' />
            </form>
            <p style={{ margin: '10px 0', fontSize: '10px' }}>you can also</p>
            <GoogleButton />
        </div>
    )
}

export default SignUp