import React from 'react';
import { Link } from 'react-router-dom';
import useAuthState from '../methods/authState';

const CartIcon = ({ iconColor }) => {
    const { authUser } = useAuthState()

    return (
        <Link to={authUser ? '/cart' : '/auth'} className='link' style={{ color: `${iconColor || 'white'}` }}>
            <i className="material-symbols-outlined filled">Shopping_cart</i>
        </Link>
    )
}

export default CartIcon