import "./MenuItem.css"

export default function MenuItem({children , onClick, className}) {
    return(
        <div className={className}>
            <a className="link" href="#" onClick={onClick}>{children}</a>
        </div>
    )
}