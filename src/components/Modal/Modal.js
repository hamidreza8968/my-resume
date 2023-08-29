import React from 'react';
import "./Modal.css"

export default function Modal({modalIsOpen, onClose, children}) {
    if (!modalIsOpen) return null;

    return (
        <div className="modal">
                <button className="close-button" onClick={onClose}>
                    <ion-icon name="close-outline"/>
                </button>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}