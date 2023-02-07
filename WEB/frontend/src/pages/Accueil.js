import {Button, Container} from 'react-bootstrap';


// Importing css
import "./Accueil.css"


// Importing Images
import logo from "../assets/logo.png"

function Accueil() {
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
          <Button variant="outline-danger" size="lg" onClick={e=>window.location.href='/inscription/Connection'}>Connection</Button>{' '}
          <Button variant="outline-danger" size="lg" onClick={e=>window.location.href='/inscription/Inscription'}>Inscription</Button>
        </div>
      </Container>

    </>
  );
}

export default Accueil;
