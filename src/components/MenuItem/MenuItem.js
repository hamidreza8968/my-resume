import "./MenuItem.css"

export default function MenuItem({children , onClick}) {
    return(
        <div>
            <a className="link" href="#" onClick={onClick}>{children}</a>
        </div>
    )
}