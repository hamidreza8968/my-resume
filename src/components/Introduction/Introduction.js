import "./Introduction.css";


export default function Introduction() {

    return (
        <div>
            <div className="introduction-heading">
                <h1 className="fullName">Hamid Seyedabadi</h1>
                <h1 className="specially">Frontend Developer</h1>
            </div>
            <ul className="list">
                <div className="list-item">
                    <ion-icon name="medal-outline"></ion-icon>
                    <li>Collaborative Team Player</li>
                </div>
                <div className="list-item">
                    <ion-icon name="medal-outline"></ion-icon>
                    <li>Passionate About Problem Solving</li>
                </div>
                <div className="list-item">
                    <ion-icon name="medal-outline"></ion-icon>
                    <li>Fan Of Standard And Clean Code</li>
                </div>
                <div className="list-item">
                    <ion-icon name="medal-outline"></ion-icon>
                    <li>Committed To Continuous Learning</li>
                </div>
                <div className="list-item">
                    <ion-icon name="medal-outline"></ion-icon>
                    <li>Proficient In Agile Methodologies</li>
                </div>
            </ul>
        </div>
    )
}