import "./Navigation.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Navigation({stages, onClick}) {

    return (
        <div className="nav">
            {stages.map((stage , i) =>
                <MenuItem key={i} children={stage} onClick={() => onClick(stage,i)}/>
                )}
        </div>
    )

}