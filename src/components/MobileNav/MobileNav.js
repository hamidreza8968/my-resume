import "./MobileNav.css"

export default function MobileNav({handleOpenModal , size}) {
    const iconsStyles = {
        fontSize: size,
        color: "#f8f9fa",
        fontWeight: "600",
    };

    return (
        <button className="btn-mobile-nav" onClick={handleOpenModal}>
            <ion-icon style={iconsStyles} name="menu-outline"/>
        </button>
    )

}