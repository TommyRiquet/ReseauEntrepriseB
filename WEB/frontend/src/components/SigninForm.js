import React, { useState, useRef } from 'react';
import {Button,Form, Row, Col, Container} from 'react-bootstrap';
//import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";

function SigninForm() {
  const [validated, setValidated] = useState(false);

  const password = useRef(null);
  const confirmPassword = useRef(null);

  const recaptchaRef = useRef(null);
  const publicCaptchaKey = "6LfoamMkAAAAAIoxks9JWXMX4TJWJCrfo1tYjRRF";

  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const pseudo = event.target["formHorizontalPseudo"].value;

    if(pseudo.current.value && password.current.value) {
      const token = recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
    }

    setValidated(true);
  };

  function handleChangePassword(event){
    console.log(event)
    if (confirmPassword.current.value === password.current.value) {
      return event.target.setCustomValidity("");
  }
  return event.target.setCustomValidity("Password and confirm password don't match");
  };
 
  
  return (
      <>
      <Container className='center-container'>
        <div className='form-layout'>
      <h1>Inscription</h1>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>
              Adresse mail
            </Form.Label>
            <Col>
              <Form.Control required type="email" placeholder="Email"/>
              <Form.Control.Feedback type={'invalid'}>Veuillez entrer une email correcte!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPseudo">
            <Form.Label>
              Pseudo
            </Form.Label>
            <Col>
              <Form.Control required type="text" placeholder="Pseudo" />
              <Form.Control.Feedback type={'invalid'}>Veuillez entrer un pseudo correcte!</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>
              Mot de passe
            </Form.Label>
            <Col>
              <Form.Control required type="password" placeholder="Mot de passe" ref={password} minLength={8} maxLength={64} />
              <Form.Control.Feedback type={'invalid'}>Veuillez entrer un mot de passe!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
            <Form.Label>
             Confirmez le Mot de passe
            </Form.Label>
            <Col >
              <Form.Control required type="password" placeholder="Mot de passe" ref={confirmPassword} minLength={8} maxLength={64} onChange={handleChangePassword}/>
              <Form.Control.Feedback type={'invalid'}>Veuillez confirmer le mot de passe!</Form.Control.Feedback>
            </Col>
          
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalRole">
            <Col className='center-div'>
              <Form.Label as="legend" >
                Rôle
              </Form.Label>
                <Form.Check
                  type="radio"
                  label="étudiant"
                  name="formHorizontalRadios"
                  id="student"
                  defaultChecked={true}
                />
                <Form.Check
                  type="radio"
                  label="formateur"
                  name="formHorizontalRadios"
                  id="former"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <ReCAPTCHA ref={recaptchaRef} sitekey={publicCaptchaKey} size='invisible'/>
          <Form.Group as={Row} className="mb-3">
            <Col className='center-div'>
              <Button type="submit" variant="danger">S'inscrire</Button>
            </Col>
          </Form.Group>
        </Form>
        </div>
        </Container>
      </>
    );
  }
  
  export default SigninForm;
  