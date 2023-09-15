import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './style.css';
import '.';

export default function App() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function showUserName(NombreUsuario) {
    alert('Vamos a mandar post: ' + NombreUsuario);
  }
  return (
    <div>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Mi ventana ok</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Usuario:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Correo o usuario"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary">Cancelar</Button>
            <Button onClick={() => showUserName(username)}>Ok</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}
