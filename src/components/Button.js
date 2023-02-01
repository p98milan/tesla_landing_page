import React from 'react';

const Button = ({ bgColor, text }) => {
    return (
        <button style={{ backgroundColor: `${bgColor}` }}>{text}</button>
    )
}

export default Button;