import React from 'react'

const GoogleButton = ({ width }) => {
    return (
        <button className='hover' style={{
            width: width || '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #d0d0d0'
        }} >
            <div className="row">
                <img src="assets/google.png" alt="google" width={'30px'} style={{ marginRight: '10px' }} />
                <p>Continue with google</p>
            </div>
        </button >
    )
}

export default GoogleButton