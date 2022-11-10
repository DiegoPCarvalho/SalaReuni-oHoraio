import Accordion from 'react-bootstrap/Accordion';
import  Segunda from '../Cards/Segunda';
import Terca from '../Cards/Terca';

function BasicExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Segunda</Accordion.Header>
        <Accordion.Body>
            <Segunda />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Terça</Accordion.Header>
        <Accordion.Body>
            <Terca />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quarta</Accordion.Header>
        <Accordion.Body>
            Sou Quarta
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Quinta</Accordion.Header>
        <Accordion.Body>
            Sou Quinta
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Sexta</Accordion.Header>
        <Accordion.Body>
            Sou Sexta
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;