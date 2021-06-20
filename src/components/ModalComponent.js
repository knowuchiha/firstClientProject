import React from "react";

export default function ModalComponent(props) {
    return (
        <div class="modal fade" id="exampleModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div className="modal-img">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
