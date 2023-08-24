import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import myPic from "./images/my.jpeg"
import Introduction from "./components/Introduction/Introduction";



// Feel free to contact me if you would like to discuss new opportunities.

const myInformation = {
  firstName : "Hamidreza",
  lastName : "Seyedabadi",
  age : 34,
  job : "Frontend-developer",
  educationBachelor: {major:"industrial engineering", university:"Iran university of science and technology"},
  educationMaster: {major:"industrial management", university:"Allameh tabatabai university"},
  experience: [{companyName: "Kowsar Insurance", position: "System and Process specialist" , start: "Mar 2017" , end: "Nov 2022"}, {companyName: "Freelance(Self employed)", position: "Intern Frontend Web Developer" , start: "Dec 2022" , end: "Now"}],
  skills: [["HTML" , "CSS" , "SASS" , "Git" , "JavaScript" , "React.js" , "Redux.js"] , ["BPMN" , "ISO 9001", "ISO 10002 ", "ISO 10004", "ISO 10015", "Microsoft Office", "Compilation of internal guidelines and documents", "Strategic Planning"]],
  contact: {Email: "hamidreza.seydabadi68@gmail.com", Linkedin: "linkedin.com/in/hamidreza-seydabadi-b64996267" , Github: "github.com/hamidreza8968"},
  };

function App() {
  const stages = ["introduction", "education", "experience", "skills", "contact"];

  const [stage, setStage] = useState({stageName: "introduction", stageNumber: 1});

  function onClick(name,number) {
    setStage({stageName: name, stageNumber: number+1})
  }


  return (
    <div className="app container grid grid--3-cols">
      <Header myInformation={myInformation} stage={stage}/>
      <Navigation stages={stages} onClick={onClick}/>
      <div className="img-box">
        <img className="img" src={myPic} alt="my picture"/>
      </div>
        {stage.stageName === "introduction" && <Introduction myInformation={myInformation}/>}
        {/*{stage.stageName === "introduction" && <Introduction/>}*/}
        {/*{stage.stageName === "introduction" && <Introduction/>}*/}
        {/*{stage.stageName === "introduction" && <Introduction/>}*/}
        {/*{stage.stageName === "introduction" && <Introduction/>}*/}
    </div>
  );
}


export default App;
