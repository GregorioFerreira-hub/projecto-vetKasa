import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
import { TouchableOpacity } from 'react-native-web';

function C_perfil() {
  return (


    <div className='perfil'>
      <TouchableOpacity>
        <a ><img src={require('../../img/foto.jfif')} style={{ width: 150, position: 'relative', marginBottom: 30, marginTop: 60 }} /></a>
      </TouchableOpacity>
      <div className='dadopessoal' style={{ margin: 30, marginLeft: 350 }}>


        <InputGroup className="mb-3" style={{ width: 600 }}>
          <InputGroup.Text id="basic-addon2" style={{ width: 150, textAlign: 'center' }}>Nome</InputGroup.Text>
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ width: 600 }}>
          <InputGroup.Text id="basic-addon2" style={{ width: 150, textAlign: 'center' }}>Morada</InputGroup.Text>
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ width: 600 }}>
          <InputGroup.Text id="basic-addon2" style={{ width: 150, textAlign: 'center' }}>E-mail</InputGroup.Text>
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ width: 600 }}>
          <InputGroup.Text id="basic-addon2" style={{ width: 150, textAlign: 'center' }}>Foto</InputGroup.Text>
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>


        <div className="d-grid gap-2" style={{ width: 600 }}>
          <Button variant="secondary" size="lg">
            Editar Dados
          </Button>
        </div>




      </div>
      <div className='adicional'>


      </div>

    </div>
  );
}
export default C_perfil;