

import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

interface InitProps {
    onSubmit?: () => void;
    onHide?: () => void;
    show: boolean;
    title?: string;
}

const ModalComponent : FC<InitProps> = (props) => {
    return (
        <>
           <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
              
            </Modal>
        </>
    );
}

export default ModalComponent;

