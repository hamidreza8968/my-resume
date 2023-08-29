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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onClick(name,number) {
    setStage({stageName: name, stageNumber: number+1})
  }


  return (
    <div className="app container grid grid--3-cols">
      <Header stage={stage} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      <Navigation stages={stages} onClick={onClick}/>
        <div className="img-box">
            {!modalIsOpen && <img className="img" src={myPic} alt="my picture"/>}
      </div>
        {stage.stageName === "introduction" && <Introduction/>}
        {stage.stageName === "education" && <Education/>}
        {stage.stageName === "experience" && <Experience/>}
        {stage.stageName === "skills" && <SkillList/>}
        {stage.stageName === "contact" && <Contact/>}
    </div>
  );
}


export default App;
