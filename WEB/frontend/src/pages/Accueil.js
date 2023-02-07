import {Button} from 'react-bootstrap';

function Accueil() {
  return (
    <>
        <h1>Accueil</h1>
        <Button variant="outline-secondary" onClick={e=>window.location.href='/inscription/Connection'}>Connection</Button>{' '}
        <Button variant="outline-secondary" onClick={e=>window.location.href='/inscription/Inscription'}>Inscription</Button>
    </>
  );
}

export default Accueil;
