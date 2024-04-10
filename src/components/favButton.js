import React, { useEffect, useState } from 'react'
import useAuthState from '../methods/authState'
import { Link } from 'react-router-dom'
import useFetch from '../methods/useFetch'
const { url2 } = require('../methods/urls')

const FavButton = ({ pid, styles }) => {
    const { authUser } = useAuthState();
    const { data } = useFetch(`${url2}/list/${authUser && authUser.uid}`);

    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false)
    useEffect(() => {
        data && setIsAddedToWishlist(addedToWishlist(pid, data))
    }, [pid, data])

    function addedToWishlist(pid, list) {
        for (let i = 0; i < list.length; i++) {
            if (pid === list[i]) {
                return true;
            }
        }
        return false;
    }

    function addOrRemoveWishlist(added) {
        fetch(`${url2}/list/${authUser.uid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product: pid, added: added })
        }).then(Response => setIsAddedToWishlist(!added))

            .catch(() => alert('Unable to add to wishlist'));
    }

    return (
        authUser ?
            <Link>
                <i className={`material-symbols-outlined fav ${data && isAddedToWishlist ? 'filled' : ''}`}
                    style={styles || { color: "red" }}
                    onClick={() => { addOrRemoveWishlist(isAddedToWishlist) }}
                >favorite</i>
            </Link>

            :

            <Link to={'/auth'}>
                <i className="material-symbols-outlined fav"
                    style={styles || { color: "red" }}>favorite</i>
            </Link>
    )
}

export default FavButton