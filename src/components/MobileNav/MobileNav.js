import "./MobileNav.css"

const iconsStyles = {
    fontSize: "3.6rem",
    color: "#f8f9fa",
    fontWeight: "600",
};

export default function MobileNav({handleOpenModal}) {
    return (
        <button className="btn-mobile-nav" onClick={handleOpenModal}>
            <ion-icon style={iconsStyles} name="menu-outline"/>
        </button>
    )

}