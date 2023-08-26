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
        {degree: "master's degree", major: "industrial management", university: "Allameh tabatabai university"},
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


