import Project from "../Project/Project";
import "./ProjectList.css";
import projects from "../../data/projects";
import React from "react";


export default function ProjectList() {
    return(
        <div className="projects">
            {projects.map((project , i) => <Project projectObj={project} key={i}/>)}
        </div>
    )
}