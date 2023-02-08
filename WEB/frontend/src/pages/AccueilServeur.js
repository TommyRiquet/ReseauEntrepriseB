import {Button, Container} from 'react-bootstrap';


// Importing css
import "./Accueil.css"


// Importing Images
import logo from "../assets/logo.png"

function AccueilServeur() {
  return (
    <>
          <div className='wrapper'>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>
        <div><span classe="bulle"></span></div>



      </div>
      <Container className='center-container'>
        <img src={logo} alt="logo"></img>
        <div>
          <Button variant="outline-danger" size="lg" onClick={e=>window.location.href='/accueil'}>Canada</Button>{' '}
          <Button variant="outline-danger" size="lg" onClick={e=>window.location.href='/accueil'}>France</Button>
        </div>
      </Container>

    </>
  );
}

export default AccueilServeur;
