import React, {useState} from "react";
import "./Header.css";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Modal from "../Modal/Modal";
import ContactLinks from "../ContactLinks/ContactLinks";
import MobileNav from "../MobileNav/MobileNav";
import Navigation from "../Navigation/Navigation";

export default function Header({stage , stages , onClick}) {

    const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
    const [navModalIsOpen, setNavModalIsOpen] = useState(false);


    function handleOpenContactModal() {
        setContactModalIsOpen(true);
    }
    function handleCloseContactModal() {
        setContactModalIsOpen(false);
    }


    function handleOpenNavModal() {
        setNavModalIsOpen(true);
    }
    function handleCloseNavModal() {
        setNavModalIsOpen(false);
    }


    return (
        <header className="header">
            <div className="header-profile">
                <p className="profile-name">Hamidreza Seyedabadi</p>
                <p className="profile-job">Frontend Developer</p>
            </div>

            <div className="header-right-box">
                <div className="header-links">
                    <Link className="cv-link">download my cv</Link>
                    <Button handleClick={handleOpenContactModal} children="get in touch" className="header-btn"/>
                    <Modal modalIsOpen={contactModalIsOpen} onClose={handleCloseContactModal}>
                        <h3>Let's Connect</h3>
                        <p>I'm always excited to connect with fellow developers, collaborators, and potential employers. Whether you have a question, a project idea, or just want to say hello, feel free to reach out using any of the methods below.</p>
                        <ContactLinks/>
                    </Modal>

                    <MobileNav handleOpenModal={handleOpenNavModal} size={"3rem"}/>
                    <Modal modalIsOpen={navModalIsOpen} onClose={handleCloseNavModal}>
                        <Navigation stages={stages} onClick={onClick}/>
                    </Modal>
                </div>

                <div className="header-divider">
                    <div className="divider-text-row">
                        <div className="divider-number">{stage.stageNumber}</div>
                        <p className="divider-text">{stage.stageName}</p>
                    </div>
                    <hr className="divider-line"/>
                </div>
            </div>

            <div className="mobile-divider">
                <div className="mobile-divider-text-row">
                    <div className="mobile-divider-number">{stage.stageNumber}</div>
                    <p className="mobile-divider-text">{stage.stageName}</p>
                </div>
                <hr className="mobile-divider-line"/>
            </div>



        </header>
    )
};