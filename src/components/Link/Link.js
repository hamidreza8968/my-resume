import "./Link.css"
import React from "react";

export default function Link({children , onClick, className}) {
    return(
        <div className={className}>
            <button className="links" onClick={onClick}>{children}</button>
        </div>
    )
}