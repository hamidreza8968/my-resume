import "./ContactLinks.css"

export default function ContactLinks({styles}) {
    return (
        <div className="contact-links">
            <div className="contact-linkBox">
                <a data-title="076-2812532" className="link contact-link tooltip" target="_blank" href="tel:076-2812532">
                    <div className="icon">
                        <ion-icon name="call-outline"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a data-title="hamidreza.seydabadi68@gmail.com" className="link contact-link tooltip" target="_blank"
                   href="https://www.gmail.com/">
                    <div className="icon">
                        <ion-icon name="mail-outline"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a className="link contact-link" target="_blank"
                   href="https://www.linkedin.com/in/hamidreza-seydabadi-b64996267/">
                    <div className="icon">
                        <ion-icon name="logo-linkedin"/>
                    </div>
                </a>
            </div>
            <div className="contact-linkBox">
                <a className="link contact-link" target="_blank"
                   href="https://github.com/hamidreza8968">
                    <div className="icon">
                        <ion-icon name="logo-github"/>
                    </div>
                </a>
            </div>
        </div>
    )

}