import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ReactBootstrapComponente() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click para abrir o exemplo de componente funcional do Bootstrap
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal de Exemplo</Modal.Title>
        </Modal.Header>
        <Modal.Body> Sou o texto escolhido para o corpo do modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Concordar 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReactBootstrapComponente;