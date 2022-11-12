import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import CrudSolicitacao from './CrudSolicitar';

function SolicitarUsers() {
  const [show, setShow] = useState(false);

  const Fechar = () => setShow(false);
  const Abrir = () => setShow(true);

  return (
    <div className='d-flex justify-content-between'>
        <div className='rounded bg-success d-flex align-items-center text-light'>
           <span className='p-2'> Tabela Semanal </span> 
        </div>
      <Button variant="primary" onClick={Abrir}>
        Solicitar
      </Button>

      <Modal show={show} onHide={Fechar}>
        <Modal.Header closeButton>
          <Modal.Title>Solicite um Horário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrudSolicitacao />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SolicitarUsers;

