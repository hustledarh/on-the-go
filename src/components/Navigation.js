import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-sm-5'><strong>On The Go Tools</strong></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav className='mx-auto'>
            <Nav.Link as={Link} to="/">Unique Lines</Nav.Link>
            <Nav.Link as={Link} to="/encode" disabled>Encode</Nav.Link>
            <Nav.Link as={Link} to="/deserialize" disabled>DeSerialize</Nav.Link>
            <Nav.Link as={Link} to="/about" disabled>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;