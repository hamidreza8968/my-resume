import Timeline from "../Timeline/Timeline";


export default function Experience() {


    const experiences= [
        {title: "Frontend Web Developer", company: "MailSentry.io",  start: "Apr 2023" , end: "Now"},
        {title: "Frontend Web Developer", company: "Freelance(Self employed)",  start: "Aug 2022" , end: "Mar 2023"},
        {title: "System and Process specialist" , company: "Kowsar Insurance", start: "Mar 2017" , end: "Nov 2022"},
        ];

    const renderedTimeLine = experiences.map((experience , index) => <Timeline key={index} item={experience}/>);

    return (
        <div className="experience-timeline">
            {renderedTimeLine}
        </div>
    )

}