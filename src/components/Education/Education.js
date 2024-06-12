import "./Education.css";
import {useState} from "react";
import Card from "../Card/Card";
const educationInfo = [
    {
        degree: "Programming Qualifications",
        major: "The Ultimate React Course 2024",
        university: "Udemy"
    },
    {
        degree: "Programming Qualifications",
        major: "The Complete JavaScript Course 2024",
        university: "Udemy"
    },
    {
        degree: "Programming Qualifications",
        major: "Responsive Websites with HTML and CSS Course 2023",
        university: "Udemy"
    },
    {
        degree: "bachelor's degree",
        major: "industrial engineering",
        university: "Iran university of science and technology"
    },
    {
        degree: "master's degree",
        major: "industrial management",
        university: "Allameh tabatabai university"
    },
];

export default function Education() {

    const [curOpen, setCurOpen] = useState(null);

    const renderedCards = educationInfo.map((card, index) =>
        <Card key={index} num={index} cardInfo={card} curOpen={curOpen} setCurOpen={setCurOpen}/>
        );

    return (
        <div className="education-cards">
            {renderedCards}
        </div>
    )

}


