import { Container, Navbar } from 'react-bootstrap';

export default function Header() {
  return(
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand>
          Navbar
        </Navbar.Brand>
      </Navbar>
    </Container>
  )
}