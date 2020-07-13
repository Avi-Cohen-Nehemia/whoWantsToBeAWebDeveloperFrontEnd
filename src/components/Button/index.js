import React from "react";

const Button = ({ text, click, color }) => (
    <button
        className="button"
        onClick={ click }
        style={{
            backgroundColor: color,
        }}
    >
        { text }
    </button>
)

export default Button;