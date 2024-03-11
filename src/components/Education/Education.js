import "./Education.css";
import {useState} from "react";
import Card from "../Card/Card";

export default function Education() {

    const educationInfo = [
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
        {
            degree: "Programming Qualifications",
            major: `- The Ultimate React Course 2024 , - The Complete JavaScript Course 2024, - Responsive Real-World Websites with HTML and CSS Course 2023`,
            university: "Udemy"
        },
    ];

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


