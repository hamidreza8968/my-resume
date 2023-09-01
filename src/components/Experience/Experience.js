import Timeline from "../Timeline/Timeline";

export default function Experience() {

    const experiences= [{title: "Intern Frontend Web Developer", company: "Freelance(Self employed)",  start: "Dec 2022" , end: "Now"}, {title: "System and Process specialist" , company: "Kowsar Insurance", start: "Mar 2017" , end: "Nov 2022"}];

    const renderedTimeLine = experiences.map((experience , index) => <Timeline key={index} item={experience}/>);

    return (
        <div className="experience-timeline">
            {renderedTimeLine}
        </div>
    )

}