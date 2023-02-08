import {Button,Form, Row, Col,Container} from 'react-bootstrap';

function LoginForm() {
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
              <Button type="submit"  variant="danger" onClick={e=>window.location.href='/connexionAppel'}>Se connecter</Button>
            </Col>
          </Form.Group>
        </Form>
        </div>
        </Container>
    </>
  );
}

export default LoginForm;
