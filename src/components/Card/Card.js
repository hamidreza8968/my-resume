import "./Card.css"

export default function Card({cardInfo, num, curOpen, setCurOpen}) {

    const isOpen = num === curOpen;

    function handleOpen() {
        setCurOpen(isOpen ? null : num);
    }

    return (
        <div className= {isOpen ? "card open" : "card"} onClick={handleOpen}>
            <div className="card-openPart">
                <div className="card-headingBox">
                    <div className="card-icon">
                        <ion-icon name="school-outline" />
                    </div>
                    <p className="heading card-heading">{cardInfo.degree}</p>
                </div>

                {
                    isOpen ? <div className="card-icon">
                            <ion-icon name="remove-outline"/>
                        </div>
                        : <div className="card-icon">
                            <ion-icon name="add-outline" />
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