import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from 'react-router-dom'
function  ModalComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => window.document.location.reload(true);
  const navigateHome = () => Navigate('/login');

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Usuario cadastrado com suecesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fique atento ao seu e-mail, celular, para saber dos resultados!
          Agradeçemos pela sua matricula!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fazer nova matricula
          </Button>
          <Button variant="primary" onClick={navigateHome}>Voltar para Home</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
