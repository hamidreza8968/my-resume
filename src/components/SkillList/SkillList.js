import "./SkillList.css"
import Skill from "../Skill/Skill";

const skills = [
    {
        skill: "HTML",
        level: "Advanced",
    },
    {
        skill: "CSS & SCSS",
        level: "Advanced",
    },
    {
        skill: "Tailwind CSS",
        level: "Advanced",
    },
    {
        skill: "Responsive design",
        level: "Advanced",
    },
    {
        skill: "React.js",
        level: "Advanced",
    },
    {
        skill: "JavaScript",
        level: "Advanced",
    },
    {
        skill: "TypeScript",
        level: "Intermediate",
    },
    {
        skill: "NextJS",
        level: "Intermediate",
    },
    {
        skill: "REST APIs",
        level: "Intermediate",
    },
    {
        skill: "Redux",
        level: "Intermediate",
    },
    {
        skill: "Ant Design",
        level: "Intermediate",
    },
    {
        skill: "Git",
        level: "Intermediate",
    },

    {
        skill: "Scrum and Agile",
        level: "Intermediate",
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