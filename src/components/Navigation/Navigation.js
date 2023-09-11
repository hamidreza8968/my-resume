import "./Navigation.css";
import {Link} from 'react-router-dom'
import React from "react";

export default function Navigation({stages , mainNav}) {

    return (
        <div className={`nav ${mainNav && "main-nav"}`}>
            {stages.map((stage , i) =>
                    <Link to={stage} className="nav-link">
                        {stage}
                    </Link>
                )}
        </div>
    )

}