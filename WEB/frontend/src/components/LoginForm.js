import {Button,Form} from 'react-bootstrap';

function LoginForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pseudo</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre pseudo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Soumettre
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
