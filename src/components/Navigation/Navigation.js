import "./Navigation.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Navigation({stages, onClick, mainNav}) {

    return (
        <div className={`nav ${mainNav && "main-nav"}`}>
            {stages.map((stage , i) =>
                <MenuItem key={i} children={stage} className="menuItem-link" onClick={() => onClick(stage,i)}/>
                )}
        </div>
    )

}