import "./Button.css";

export default function Button({children}) {
    return (
        <div>
            <a className="btn" href="#">{children}</a>
        </div>
    )
}