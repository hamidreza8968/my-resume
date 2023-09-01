import React from 'react';
import "./Modal.css"

export default function Modal({modalIsOpen, onClose, children}) {
    if (!modalIsOpen) return null;


    return (
        <div className="modal-bg">
            <div className="modal">
                <div className="modal-content" onClick={onClose}>
                    {children}
                </div>
                <button className="close-button" onClick={onClose}>
                    <ion-icon name="close-outline"/>
                </button>
            </div>
        </div>
    );
}