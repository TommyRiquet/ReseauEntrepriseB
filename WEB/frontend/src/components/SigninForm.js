import React, { useState } from 'react';
import {Button,Form, Row, Col} from 'react-bootstrap';
//import * as Yup from 'yup';

function SigninForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    //pour validation du mot de passe 
    // !!! VALIDATION PAS ENCORE FONCTIONELLE !!!
    /*validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
      passwordConfirmation: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });*/ 

    setValidated(true);
  };
  
  return (
      <>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Adresse mail
            </Form.Label>
            <Col sm={5}>
              <Form.Control required type="email" placeholder="Email" />
            </Col>
          </Form.Group>
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
          <Form.group as={Row} className="mb-3" controlId="formHorizontalPasswordVerif"></Form.group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
            <Form.Label column sm={2}>
             Confirmez le Mot de passe
            </Form.Label>
            <Col sm={5}>
              <Form.Control required type="password" placeholder="Mot de passe" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Rôle
              </Form.Label>
              <Col sm={10}>
                <Form.Check required
                  type="radio"
                  label="étudiant"
                  name="formHorizontalRadios"
                  id="student"
                />
                <Form.Check required
                  type="radio"
                  label="formateur"
                  name="formHorizontalRadios"
                  id="former"
                />
              </Col>
            </Form.Group>
          </fieldset>
          
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">S'inscrire</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
  }
  
  export default SigninForm;
  