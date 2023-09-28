import "./Project.css"
import React, {useState} from "react";

export default function Project({projectObj}) {
    const [imageSrc, setImageSrc] = useState(projectObj.src);
    const handleMouseEnter = () => {
        setImageSrc(projectObj.srcHover);
    };
    const handleMouseLeave = () => {
        setImageSrc(projectObj.src);
    };
    return (
        <a className="project-card" href={projectObj.address} target="_blank">
            <img className="project-img" src={imageSrc} alt="picture of website" onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}/>
            <h1 className="project-title">{projectObj.title}</h1>
            <div className="project-tools">
                {projectObj.tools.map((tool, i) =>
                <span key={i}>
                     {tool}
                    {projectObj.tools.length === i+1 ? '' : ` ,`}
                </span>
            )}</div>
        </a>
    )
}