import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import "./App.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import myPic from "./images/my.jpeg"
import Introduction from "./components/Introduction/Introduction";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import SkillList from "./components/SkillList/SkillList";
import Contact from "./components/Contact/Contact";

// Feel free to contact me if you would like to discuss new opportunities.

function App() {
  const stages = ["introduction", "education", "experience", "skills", "contact"];

  const [stage, setStage] = useState({stageName: "introduction", stageNumber: 1});


  function onClick(name,number) {
    setStage({stageName: name, stageNumber: number+1})
  }


  return (
    <div className="app container">
      <Header stage={stage} stages={stages} onClick={onClick}/>

      <Navigation stages={stages} onClick={onClick}/>

      <div className="img-box">
            <img className="img" src={myPic} alt="my picture"/>
      </div>

        <div className="component-box">
            {stage.stageName === "introduction" && <Introduction/>}
            {stage.stageName === "education" && <Education/>}
            {stage.stageName === "experience" && <Experience/>}
            {stage.stageName === "skills" && <SkillList/>}
            {stage.stageName === "contact" && <Contact/>}
        </div>

    </div>
  );
}


export default App;
