import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackIcon = ({ color }) => {
    const history = useNavigate();
    return (
        <i
            className="material-symbols-outlined"
            style={{ color: `${color || 'white'}`, cursor: 'pointer' }}
            onClick={() => history(-1)}
        >arrow_back</i>

    )
}

export default BackIcon