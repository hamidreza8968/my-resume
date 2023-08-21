import React, {useState} from "react";

export default function Header({myInformation}) {
    const [stage , setStage] = useState("introduction");
    const [stageNum , setStageNum] = useState(1);

    return (
        <header className="header">
            <div className="header-profile">
                <p className="profile-name">{myInformation.firstName} {myInformation.lastName}</p>
                <p className="profile-job">{myInformation.job}</p>
            </div>
            <div className="header-links">
                <a className="link-cv" href="#">download my cv</a>
                <a className="link-touch" href="#">get in touch</a>
            </div>
            <div className="header-divider">
                <div className="divider-number">{stageNum}</div>
                <p className="divider-text">{stage}</p>
                <hr className="divider-line"/>
            </div>
        </header>
    )
};