import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <button
                    type="button"
                    className="btn close"
                    data-dismiss="modal"
                    onClick={props.handleClose}
                >
                    <span>&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={props.img} alt="" />
                </div>
            </Modal.Body>
        </Modal>
    );
}
