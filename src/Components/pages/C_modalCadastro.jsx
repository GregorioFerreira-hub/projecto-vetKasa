import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function C_modalCadastro() {
    const values = [true, 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-1 mb-1" onClick={() => handleShow(v)}> Cadastra-</Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{justifyContent:'center'}}>
                        Cadastro
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Modal body content


                </Modal.Body>
            </Modal>
        </>
    );
}

export default C_modalCadastro;
