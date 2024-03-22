import React, { useState } from 'react';
import Login from './screens/login';
import SignUp from './screens/signUp';
import useAuthState from '../methods/authState';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const { authUser } = useAuthState();
    const history = useNavigate()

    if (authUser) {
        history(-1);
    }
    const [selectedIndex, setSelectedIndex] = useState(0);
    let style = {
        fontWeight: 'bold',
        borderBottom: '3px solid #0074A6',
        color: '#0074A6'
    }
    return (
        <div>
            <div className="row tab">
                <p className='hover'
                    style={selectedIndex === 0 ? style : {}}
                    onClick={() => setSelectedIndex(0)}>Login</p>
                <p className='hover'
                    style={selectedIndex === 1 ? style : {}}
                    onClick={() => setSelectedIndex(1)}>Sign Up</p>

            </div>
            {selectedIndex === 0 && <Login />}
            {selectedIndex === 1 && <SignUp />}
        </div>
    )
}

export default AuthPage