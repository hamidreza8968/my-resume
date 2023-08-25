import "./Card.css"

export default function Card({cardInfo, num, curOpen, setCurOpen}) {

    const isOpen = num === curOpen;

    function handleOpen() {
        setCurOpen(isOpen ? null : num);
    }

    return (
        <div className= {isOpen ? "card open" : "card"} onClick={handleOpen}>
            <div className="card-openPart">
                <div className="card-headingBox"><ion-icon name="school-outline"></ion-icon> <p className="heading card-heading">{cardInfo.degree}</p></div>

                {
                    isOpen ? <div className="icon">
                            <ion-icon name="remove-outline"></ion-icon>
                        </div>
                        : <div className="icon">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                }
            </div>
            {isOpen && <div className="card-closePart">
                <p className="card-text">{cardInfo.major}</p>
                <p className="card-text">{cardInfo.university}</p>
            </div>}
        </div>
    )

}