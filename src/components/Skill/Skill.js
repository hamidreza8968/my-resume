import "./Skill.css"

export default function Skill({skill}) {
    return (
        <div className={skill.level==="beginner" ? "skill-box skill-box-beginner" : "skill-box skill-box-intermediate"}>
            <p className="skill-title">{skill.skill}</p>
            <p className="skill-level">{skill.level}</p>
        </div>
    )
}