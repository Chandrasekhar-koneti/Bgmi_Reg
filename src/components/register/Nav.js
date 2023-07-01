import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../Store/Auth-Slice';

function Naav() {

    const dispatch=useDispatch()
    const History=useNavigate()

    const logoutHandler=()=>{
        dispatch(authActions.logout())
        History('/')
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link href="/">Back</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/rules">Rules</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
        <Button style={{position:'absolute', right:'3rem'}}   variant='success' onClick={logoutHandler}>Logout</Button>
      </Navbar>
      </>
  )
}
export default Naav