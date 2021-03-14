import React from 'react'

const Button = ({ onClick, color, text }) => {
    return (
        <div>
            <button onClick={onClick} className={`ui ${color} button`}>
                {text}
            </button>
        </div>
    )
}

export default Button;
