import "./ContactLinks.css"


const iconsStyles = {
    fontSize: "3.6rem",
    color: "#f8f9fa",
    fontWeight: "600",
};

export default function ContactLinks({styles}) {

    return (
        <div className="contact-links">
            <div className="contact-linkBox">
                <a data-title="076-2812532" className="link contact-link tooltip" target="_blank" href="tel:076-2812532">
                    <div>
                        <ion-icon style={iconsStyles} name="call-outline"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a data-title="hamidreza.seydabadi68@gmail.com" className="link contact-link tooltip" target="_blank"
                   href="https://www.gmail.com/">
                    <div>
                        <ion-icon style={iconsStyles} name="mail-outline"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a className="link contact-link" target="_blank"
                   href="https://www.linkedin.com/in/hamidreza-seydabadi-b64996267/">
                    <div>
                        <ion-icon style={iconsStyles} name="logo-linkedin"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a className="link contact-link" target="_blank"
                   href="https://github.com/hamidreza8968">
                    <div>
                        <ion-icon style={iconsStyles} name="logo-github"/>
                    </div>
                </a>
            </div>
        </div>
    )

}