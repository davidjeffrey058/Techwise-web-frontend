import React from 'react'
import useAuthState from '../methods/authState'
import { Link } from 'react-router-dom'
import useFetch from '../methods/useFetch'
const { url2 } = require('../methods/urls')

const FavButton = ({ pid, styles }) => {
    const { authUser } = useAuthState();
    const { data } = useFetch(`${url2}/list/${authUser && authUser.uid}`);

    function addedToCart(pid, list) {
        for (let i = 0; i < list.length; i++) {
            if (pid === list[i]) {
                return true;
            }
        }
        return false;
    }

    return (
        authUser ? <i className={`material-symbols-outlined fav ${data && addedToCart(pid, data) ? 'filled' : ''}`}
            style={styles || { color: "red" }}>favorite</i> :
            <Link to={'/auth'}>
                <i className="material-symbols-outlined fav"
                    style={{ color: "red" }}>favorite</i>
            </Link>
    )
}

export default FavButton