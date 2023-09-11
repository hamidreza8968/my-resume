import "./Link.css"

export default function Link({children , onClick, className}) {
    return(
        <div className={className}>
            <a className="links" href="#" onClick={onClick}>{children}</a>
        </div>
    )
}