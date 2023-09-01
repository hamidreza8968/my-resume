import "./SkillList.css"
import Skill from "../Skill/Skill";

const skills = [
    {
        skill: "HTML",
        level: "intermediate",
    },
    {
        skill: "CSS",
        level: "intermediate",
    },
    {
        skill: "Git",
        level: "intermediate",
    },
    {
        skill: "Responsive design",
        level: "beginner",
    },
    {
        skill: "JavaScript",
        level: "beginner",
    },
    {
        skill: "ES6",
        level: "beginner",
    },
    {
        skill: "React.js",
        level: "beginner",
    },
    {
        skill: "React Hooks",
        level: "beginner",
    },
    {
        skill: "Redux.js",
        level: "beginner",
    },
    {
        skill: "React Router",
        level: "beginner",
    }
];

export default function SkillList() {
    const renderedSkills = skills.map((skill , index) => <Skill key={index} skill={skill}/>);

        return (
            <div className="skill-list">
                {renderedSkills}
            </div>
        );
}