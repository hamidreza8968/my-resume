import "./Introduction.css";
import Button from "../Button/Button";


export default function Introduction() {

    return (
        <div>
            <h1 className="heading">Hello! I'm Hamidreza Seyedabadi</h1>
            <ul className="list">
                <li className="list-item">I'm <span>34</span> years old With <span>6</span> years of experience as a process management specialist, I've developed my adaptable and collaborative skills.</li>
                <li className="list-item">Because of My interest in programming, I took relevant courses. I've focused on learning <span>CSS</span>, <span>HTML</span>, <span>JavaScript</span>, and <span>React</span> through writing personal projects in the last year.</li>
                <li className="list-item">I'm looking for an <span>internship role</span> and I'm excited to contribute to a professional team.</li>
                <li className="list-item">My commitment, dedication, and quick learning reflect my work ethic. If given the chance, I'm confident I can exceed expectations and make a valuable contribution.</li>
            </ul>
            <Button>more about me</Button>
        </div>
    )
}