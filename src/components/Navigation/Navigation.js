import "./Navigation.css";
import {NavLink} from 'react-router-dom'
import React from "react";

export default function Navigation({stages , mainNav}) {

    return (
        <div className={`nav ${mainNav && "main-nav"}`}>
            {stages.map((stage , i) =>
                    <NavLink to={stage} className="nav-link" key={i}>
                        {stage}
                    </NavLink>
                )}
        </div>
    )

}