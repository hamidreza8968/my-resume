import React, {useState} from "react";
import "./Header.css";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";

export default function Header({myInformation , stage , stageNum}) {

    return (
        <header className="header container">
            <div className="header-profile">
                <p className="profile-name">{myInformation.firstName} {myInformation.lastName}</p>
                <p className="profile-job">{myInformation.job}</p>
            </div>
            <div className="Header-right-box">
                <div className="header-links">
                    <MenuItem>download my cv</MenuItem>
                    <Button>get in touch</Button>
                </div>
                <div className="header-divider">
                    <div className="divider-number">{stageNum}</div>
                    <p className="divider-text">{stage}</p>
                    <hr className="divider-line"/>
                </div>
            </div>
        </header>
    )
};