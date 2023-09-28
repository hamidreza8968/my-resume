import "./Button.css";
import React from "react";

export default function Button({children , handleClick , className}) {
    return (
        <div>
            <a onClick={handleClick} className={`btn ${className}`} href="#">{children}</a>
        </div>
    )
}