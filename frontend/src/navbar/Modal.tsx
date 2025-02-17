import React from "react";
import modalStyles from "./modal.module.css";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div className={modalStyles.overlay}>
            <div className={modalStyles.modalContent}>
                <button className={modalStyles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
