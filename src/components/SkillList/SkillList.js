import "./SkillList.css"
import Skill from "../Skill/Skill";

const skills = [
    {
        skill: "Web development",
        level: "Intermediate",
    },
    {
        skill: "React.js",
        level: "Intermediate",
    },
    {
        skill: "JavaScript",
        level: "Intermediate",
    },
    {
        skill: "TypeScript",
        level: "Intermediate",
    },
    {
        skill: "HTML",
        level: "Advanced",
    },
    {
        skill: "CSS & SCSS",
        level: "Advanced",
    },
    {
        skill: "Redux.js",
        level: "Intermediate",
    },
    {
        skill: "NEXT.js",
        level: "Intermediate",
    },
    {
        skill: "REST APIs",
        level: "Intermediate",
    },
    {
        skill: "Tailwind CSS",
        level: "Intermediate",
    },
    {
        skill: "Ant Design",
        level: "Intermediate",
    },
    {
        skill: "Responsive design",
        level: "Advanced",
    },
    {
        skill: "Git",
        level: "Advanced",
    },

    {
        skill: "Scrum and Agile",
        level: "Advanced",
    },
    {
        skill: "Figma",
        level: "Intermediate",
    },
];

export default function SkillList() {
    const renderedSkills = skills.map((skill , index) => <Skill key={index} skill={skill}/>);

        return (
            <div className="skill-list">
                {renderedSkills}
            </div>
        );
}