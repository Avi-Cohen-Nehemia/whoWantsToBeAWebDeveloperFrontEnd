import React from "react";

const Button = ({ text, click, color, btnStyle }) => (
    <button
        className={ btnStyle }
        onClick={ click }
        style={{
            backgroundColor: color,
        }}
    >
        { text }
    </button>
)

export default Button;