import "./Timeline.css"

export default function Timeline({item}) {

    return (
        <div className="timeline">
            <div className="timeline-item">
                <p className="timeline-item-title">{item.title}</p>
                <p className="timeline-item-text">{`${item.start} - ${item.end}`}</p>
                <p className="timeline-item-text">{item.company}</p>
            </div>
        </div>
    )

}