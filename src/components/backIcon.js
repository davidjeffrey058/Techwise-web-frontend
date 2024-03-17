import React from 'react'
import { Link } from 'react-router-dom'

const BackIcon = ({ color }) => {
    return (
        <Link>
            <i className="material-symbols-outlined"
                style={{ color: `${color || 'white'}` }}>back</i>
        </Link>

    )
}

export default BackIcon