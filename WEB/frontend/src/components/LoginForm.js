import {Button,Form, Row, Col,Container} from 'react-bootstrap';


import salt from '../salt';
import sha512 from 'js-sha512';
import config from "../config";


function LoginForm() {


  function handleClick(e) {
    e.preventDefault();
    
    fetch(config.API_URL+'/users/authentification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Credentials': 'include'

      },
      body: JSON.stringify({
        pseudo: document.getElementById('formHorizontalEmail').value,
        password: sha512(document.getElementById('formHorizontalPassword').value,salt)
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data[0].status === 'success') {
          window.location.href = '/bibli';
        }else{
          console.log('error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
  }
  return (
    <>
      <Container className='center-container'>
      <div className='form-layout'>
      <h1>Connection</h1>
      <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>
              Pseudo
            </Form.Label>
            <Col>
              <Form.Control required type="text" placeholder="Pseudo" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>
              Mot de passe
            </Form.Label>
            <Col>
              <Form.Control required type="password" placeholder="Mot de passe" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col className='center-div'>
              <Button type="submit"  variant="danger" onClick={e=>handleClick(e)}>Se connecter</Button>
            </Col>
          </Form.Group>
        </Form>
        </div>
        </Container>
    </>
  );
}

export default LoginForm;
