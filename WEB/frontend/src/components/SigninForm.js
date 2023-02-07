import {Button,Form} from 'react-bootstrap';

function SigninForm() {
    return (
      <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse mail</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre addresse" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pseudo</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre pseudo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Selectionner votre rôle</Form.Label>
          <Form.Select aria-label="Select role">
            <option>Selectionner</option>
            <option value="student">Etudiant</option>
            <option value="former">Formateur</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Soumettre 
        </Button>
      </Form>
      </>
    );
  }
  
  export default SigninForm;
  