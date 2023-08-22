import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";


const myInformation = {
  firstName : "Hamidreza",
  lastName : "Seyedabadi",
  job : "Frontend-developer",
  introduction: "I'm excited about the opportunity to discuss my journey into front-end development. I had graduated in master's degree in industrial management field and I use to be a employee in the very big insurance company in Iran as a process management specialist for 6 years. I always tried to use my highest ability in every job, even sales, and also to be committed and loyal to my company. although I was successful in this job and got promoted 2 times but I wasn't happy and satisfied actually. I have always been interested in programming and took some courses about it during my previous job. also I know that the programming is very appropriate for my personality. I've always been passionate about creating user-friendly and visually appealing web experiences, which is why I'm drawn to front-end development. after my marriage because of my wife's job (by the way she is a very talented frontend developer) I got to know more about this field and its benefits. Although my income was more than my wife's, I was always jealous of her job. because she could write some code and immediately check the result and I personally think it's very amazing in the job. So I have started to study and search about this field after quiting my ex-job and moving to sweden I have spent the last Year honing my skills in web development and spend all last year for learning and practicing. I developed a strong foundation in HTML, CSS, and JavaScript, and I've been eager to apply these skills in a professional setting. I've completed a few personal projects that showcase my abilities, such as creating responsive websites and sharing with others on GitHub. Additionally, I'm a quick learner and thrive in a dynamic, fast-paced environment. I've been following the latest industry trends and best practices, and I'm excited about the potential to work with your team.",
  about: "Ex Systems and Processes Manager is transitioning into a Frontend Web Developer role and is very passionate about things in front-end web development. I'm looking for an internship role that will push me to improve. My goal is always to deliver great and accurate results. Feel free to contact me if you would like to discuss new opportunities.",
  educationBachelor: {major:"industrial engineering", university:"Iran university of science and technology"},
  educationMaster: {major:"industrial management", university:"Allameh tabatabai university"},
  experience: [{companyName: "Kowsar Insurance", position: "System and Process specialist" , start: "Mar 2017" , end: "Nov 2022"}, {companyName: "Freelance(Self employed)", position: "Intern Frontend Web Developer" , start: "Dec 2022" , end: "Now"}],
  skills: [["HTML" , "CSS" , "SASS" , "Git" , "JavaScript" , "React.js" , "Redux.js"] , ["BPMN" , "ISO 9001", "ISO 10002 ", "ISO 10004", "ISO 10015", "Microsoft Office", "Compilation of internal guidelines and documents", "Strategic Planning"]],
  contact: {Email: "hamidreza.seydabadi68@gmail.com", Linkedin: "linkedin.com/in/hamidreza-seydabadi-b64996267" , Github: "github.com/hamidreza8968"},
  };

function App() {
  const stages = ["introduction", "about me", "education", "experience", "skills", "contact"];

  const [stage, setStage] = useState({stageName: "introduction", stageNumber: 1});

  function onClick(name,number) {
    setStage({stageName: name, stageNumber: number+1})
  }

  return (
    <div className="App">
      <Header myInformation={myInformation} stage={stage}/>
      <Navigation stages={stages} onClick={onClick}/>
    </div>
  );
}


export default App;
