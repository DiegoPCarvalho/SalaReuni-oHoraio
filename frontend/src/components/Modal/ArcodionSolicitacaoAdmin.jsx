import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CrudSolicitarAdmin from './CrudSolicitarAdmin';

function SolicitarAdmin() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Solicitações </Accordion.Header>
        <Accordion.Body>
            <CrudSolicitarAdmin />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SolicitarAdmin;