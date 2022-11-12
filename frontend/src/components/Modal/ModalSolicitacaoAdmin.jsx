import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import CrudSolicitarAdmin from './CrudSolicitarAdmin';



function SolicitarAdmin() {
  const [show, setShow] = useState(false);

  const Fechar = () => setShow(false);
  const Abrir = () => setShow(true);

  return (
    <div className='d-flex justify-content-between'>
      <Button variant="primary" onClick={Abrir} >
        Solicitações
      </Button>

      <Modal show={show} onHide={Fechar}>
        <Modal.Header closeButton>
          <Modal.Title >Horários Solicitados</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <CrudSolicitarAdmin />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SolicitarAdmin;


