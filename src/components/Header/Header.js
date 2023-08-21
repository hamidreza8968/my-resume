import React, {useState} from "react";
import "./Header.css";

export default function Header({myInformation}) {
    const [stage, setStage] = useState("introduction");
    const [stageNum, setStageNum] = useState(1);

    return (
        <header className="header container">
            <div className="header-profile">
                <p className="profile-name">{myInformation.firstName} {myInformation.lastName}</p>
                <p className="profile-job">{myInformation.job}</p>
            </div>
            <div className="Header-right-box">
                <div className="header-links">
                    <a className="link" href="#">download my cv</a>
                    <a className="btn" href="#">get in touch</a>
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