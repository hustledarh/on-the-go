import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-5'>On The Go</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="/">Unique Lines</Nav.Link>
            <Nav.Link href="/encode" disabled>Encode</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;