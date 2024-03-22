import React from 'react'
import useAuthState from '../methods/authState'
import { Link } from 'react-router-dom'

const FavButton = ({ styles }) => {
    const { authUser } = useAuthState()
    return (
        authUser ? <i className="material-symbols-outlined fav"
            style={styles || { color: "red" }}>favorite</i> :
            <Link to={'/auth'}>
                <i className="material-symbols-outlined fav"
                    style={styles || { color: "red" }}>favorite</i>
            </Link>
    )
}

export default FavButton