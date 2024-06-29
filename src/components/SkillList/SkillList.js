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
        skill: "React.js",
        level: "Advanced",
    },
    {
        skill: "JavaScript",
        level: "Advanced",
    },
    {
        skill: "TypeScript",
        level: "Advanced",
    },
    {
        skill: "Cypress",
        level: "Advanced",
    },
    {
        skill: "JEST",
        level: "Advanced",
    },
    {
        skill: "REST APIs",
        level: "Advanced",
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
        skill: "NextJS",
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
];

export default function SkillList() {
    const renderedSkills = skills.map((skill , index) => <Skill key={index} skill={skill}/>);

        return (
            <div className="skill-list">
                {renderedSkills}
            </div>
        );
}