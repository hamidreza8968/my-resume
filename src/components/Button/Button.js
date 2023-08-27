import "./Button.css";

export default function Button({children , handleClick}) {
    return (
        <div>
            <a onClick={handleClick} className="btn" href="#">{children}</a>
        </div>
    )
}