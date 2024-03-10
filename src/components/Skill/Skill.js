import "./Skill.css"

export default function Skill({skill}) {
    return (
        <div className={skill.level==="Intermediate" ? "skill-box skill-box-intermediate" : "skill-box skill-box-advanced"}>
            <p className="skill-title">{skill.skill}</p>
            <p className="skill-level">{skill.level}</p>
        </div>
    )
}