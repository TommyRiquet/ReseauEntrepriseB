import { Navbar,Container } from 'react-bootstrap';

import logo from '../assets/petitlogo.png'
import './NavBar.css'

function CustomNavbar(){

    return(
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            <span style={{fontWeight:'bold',color:'#EE7588'}}>BrainWash</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )

}

export default CustomNavbar