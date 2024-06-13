import React from "react";
import {useLocation} from "react-router-dom"
import "./ImgProfile.css"

import myPic from "../../assets/my.jpeg";


export default function ImgProfile() {
    return useLocation().pathname !== "/projects" &&
        <div className="img-box">
            <img className="img" src={myPic} alt="hamidreza seyedabadi"/>
        </div>
};
