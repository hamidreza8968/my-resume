import Timeline from "../Timeline/Timeline";


export default function Experience() {


    const experiences= [
        {title: "Frontend Web Developer", company: "Innovatogy",  start: "Mar 2024" , end: "Now"},
        {title: "Frontend Web Developer", company: "MailSentry",  start: "Mar 2023" , end: "Mar 2024"},
        {title: "Frontend Web Developer", company: "Freelance",  start: "May 2022" , end: "Feb 2023"},
        {title: "System and Process specialist" , company: "Kowsar Insurance", start: "Mar 2017" , end: "Nov 2022"},
        ];

    const renderedTimeLine = experiences.map((experience , index) => <Timeline key={index} item={experience}/>);

    return (
        <div className="experience-timeline">
            {renderedTimeLine}
        </div>
    )

}