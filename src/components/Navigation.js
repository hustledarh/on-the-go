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
            <Nav.Link as={Link} className="border" to="/">Remove Duplicate Lines</Nav.Link>
            <Nav.Link as={Link} className="border" to="/jsonformatter">Json Formatter</Nav.Link>
            <Nav.Link as={Link} className="border" to="/stringOperations">String Operations</Nav.Link>
            <Nav.Link as={Link} className="border" to="/encodeDecode">Encode Decode</Nav.Link>
            <Nav.Link as={Link} className="border" to="/aboutus">AboutUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;