import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import "../Link/Link.css";
import "./Header.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ContactLinks from "../ContactLinks/ContactLinks";
import MobileNav from "../MobileNav/MobileNav";
import Navigation from "../Navigation/Navigation";
import resume from "../../doc/CV Hamid Seydabadi.pdf";

export default function Header({stages, onClick}) {

    const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
    const [navModalIsOpen, setNavModalIsOpen] = useState(false);


    const location = useLocation().pathname.replace("/", "").toUpperCase();

    function createLocationNum() {
        let locationNum;
        switch (location) {
            case "":
                locationNum = 1;
                break;
            case "PROJECTS":
                locationNum = 2;
                break;
            case "EDUCATION":
                locationNum = 3;
                break;
            case "EXPERIENCE":
                locationNum = 4;
                break;
            case "SKILLS":
                locationNum = 5;
                break;
            case "CONTACT":
                locationNum = 6;
                break;
            default:
                locationNum = 1;
        }
        return locationNum;
    }


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
                    <div className="cv-link">
                        <a href={resume} target="_blank" rel="noreferrer"
                           className="links">download my cv</a>
                    </div>
                    <Button handleClick={handleOpenContactModal} children="get in touch"
                            className="header-btn"/>
                    <Modal modalIsOpen={contactModalIsOpen} onClose={handleCloseContactModal}>
                        <h3>Let's Connect</h3>
                        <p>I'm always excited to connect with fellow developers,
                            collaborators, and potential employers. Whether you have a question,
                            a project idea, or just
                            want to say hello, feel free to reach out using any of the methods below.</p>
                        <ContactLinks/>
                    </Modal>

                    <MobileNav handleOpenModal={handleOpenNavModal} size={"3rem"}/>
                    <Modal modalIsOpen={navModalIsOpen} onClose={handleCloseNavModal}>
                        <Navigation stages={stages} onClick={onClick}/>
                    </Modal>
                </div>

                <div className="header-divider">
                    <div className="divider-text-row">
                        <div className="divider-number">{createLocationNum()}</div>
                        <p className="divider-text">{location === "" ? "Introduction" : location}</p>
                    </div>
                    <hr className="divider-line"/>
                </div>
            </div>

            <div className="mobile-divider">
                <div className="mobile-divider-text-row">
                    <div className="mobile-divider-number">{createLocationNum()}</div>
                    <p className="mobile-divider-text">{location === "" ? "Introduction" : location}</p>
                </div>
                <hr className="mobile-divider-line"/>
            </div>


        </header>
    )
};