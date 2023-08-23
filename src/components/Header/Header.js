import React, {useState} from "react";
import "./Header.css";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";

export default function Header({myInformation , stage}) {

    return (
        <header className="header">
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
                    <div className="divider-number">{stage.stageNumber}</div>
                    <p className="divider-text">{stage.stageName}</p>
                    <hr className="divider-line"/>
                </div>
            </div>
        </header>
    )
};