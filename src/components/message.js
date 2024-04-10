import React from 'react'

const Message = ({ message, button, height }) => {
    return (
        <div className='message_body'
            style={{ height: height }}>
            <p>{message}</p>
            {button}
        </div>
    )
}

export default Message