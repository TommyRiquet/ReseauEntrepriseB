import {Button,Form, Row, Col} from 'react-bootstrap';

function LoginForm() {
  return (
    <>
      <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Pseudo
            </Form.Label>
            <Col sm={5}>
              <Form.Control required type="text" placeholder="pseudo" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Mot de passe
            </Form.Label>
            <Col sm={5}>
              <Form.Control required type="password" placeholder="Mot de passe" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={e=>window.location.href='/connexionAppel'}>Se connecter</Button>
            </Col>
          </Form.Group>
        </Form>
    </>
  );
}

export default LoginForm;
