import React from 'react'
import { Link } from 'react-router-dom'

const CartIcon = ({ iconColor }) => {
    return (
        <Link to={'/cart'} className='link' style={{ color: `${iconColor || 'white'}` }}>
            <i className="material-symbols-outlined hover filled">Shopping_cart</i>
        </Link>
    )
}

export default CartIcon