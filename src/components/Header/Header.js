import React, {useState} from "react";
import "./Header.css";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ContactLinks from "../ContactLinks/ContactLinks";

export default function Header({stage}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    function handleOpenModal() {
        setModalIsOpen(true);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    return (
        <header className="header">
            <div className="header-profile">
                <p className="profile-name">Hamidreza Seyedabadi</p>
                <p className="profile-job">Frontend Developer</p>
            </div>

            <div className="Header-right-box">
                <div className="header-links">
                    <MenuItem>download my cv</MenuItem>
                    <Button handleClick={handleOpenModal}>get in touch</Button>
                    <Modal modalIsOpen={modalIsOpen} onClose={handleCloseModal}>
                        <h2>Let's Connect</h2>
                        <p>I'm always excited to connect with fellow developers, collaborators, and potential employers. Whether you have a question, a project idea, or just want to say hello, feel free to reach out using any of the methods below.</p>
                        <ContactLinks/>
                    </Modal>

                </div>

                <div className="header-divider">
                    <div className="divider-number">{stage.stageNumber}</div>
                    <p className="divider-text">{stage.stageName}</p>
                    <hr className="divider-line"/>
                </div>
            </div>
        </header>
    )
};