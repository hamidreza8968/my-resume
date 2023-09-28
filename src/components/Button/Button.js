import "./Button.css";
import React from "react";

export default function Button({children , handleClick , className}) {
    return (
        <div>
            <button onClick={handleClick} className={`btn ${className}`}>{children}</button>
        </div>
    )
}