import React, {useState} from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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



    function handleStage(name, number) {
        setStage({stageName: name, stageNumber: number + 1})
    }


    return (
        <BrowserRouter>
            <div className="app container">
                <Header stage={stage} stages={stages} onClick={handleStage}/>

                <Navigation stages={stages} mainNav/>

                <div className="img-box">
                    <img className="img" src={myPic} alt="my picture"/>
                </div>

                <div className="component-box">
                    <Routes>
                        <Route path="introduction" element={<Introduction/>}/>
                        <Route path="education" element={<Education/>}/>
                        <Route path="experience" element={<Experience/>}/>
                        <Route path="skills" element={<SkillList/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
        ;
}


export default App;
