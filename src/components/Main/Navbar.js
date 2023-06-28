import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav_Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link href="/bgmi">Register</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#rules">Rules</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default Nav_Header