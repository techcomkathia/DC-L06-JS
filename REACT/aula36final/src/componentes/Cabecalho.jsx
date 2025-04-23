import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark"  className="bg-body-tertiary">
        <Container >
          <Navbar.Brand >Digital College</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
            <Nav.Link as={Link} to={'/sobre'}>Sobre</Nav.Link>
            <Nav.Link as={Link} to={'/cadastrar'}>Cadastrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho