import React, { useEffect } from 'react'
import useAuthState from '../methods/authState'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { url2 } from '../methods/urls';
import useFetch from '../methods/useFetch';
import AddOrRemCart from '../methods/addOrRemCart';

const AddCartButton = ({ pid, className, showIcon = false, padding }) => {
    const { authUser } = useAuthState();
    const { data } = useFetch(`${url2}/cart/list/${authUser && authUser.uid}`);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        data && setIsAddedToCart(addedToCart(pid, data))
    }, [data, pid])

    // data && console.log(data);

    function addedToCart(pid, list) {
        for (let i = 0; i < list.length; i++) {
            if (pid === list[i].id) {
                return true;
            }
        }
        return false;
    }

    return (
        authUser ?
            <button className={`add row ${className}`} style={{
                padding: padding || '10px 20px',
                backgroundColor: isAddedToCart ? 'red' : ''
            }} onClick={() => AddOrRemCart(url2, authUser.uid, pid, isAddedToCart, () => setIsAddedToCart(!isAddedToCart))}>
                {showIcon && <i className="material-symbols-outlined " style={{ marginRight: '5px' }}>add_shopping_cart</i>}
                {isAddedToCart ? "REMOVE FROM CART" : "ADD TO CART"}
            </button>
            :
            <Link to={'/auth'} className='link'>
                <button className={`add row ${className}`} style={{ padding: padding || '10px 20px' }}>
                    {showIcon && <i className="material-symbols-outlined " style={{ marginRight: '5px' }}>add_shopping_cart</i>}
                    {"ADD TO CART"}
                </button>
            </Link>
    )
}

export default AddCartButton