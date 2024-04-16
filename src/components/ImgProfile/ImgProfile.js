import React from "react";
import {useLocation} from "react-router-dom"

import "./ImgProfile.css";


export default function ImgProfile() {
    return useLocation().pathname !== "/projects" &&
        <div className="img-box">
            <img className="img" src="assets/my.jpeg" alt="hamidreza seyedabadi"/>
        </div>
};
