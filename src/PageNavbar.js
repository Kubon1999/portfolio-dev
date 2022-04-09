import { Navbar, Container, Nav } from "react-bootstrap";

const PageNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Jakub Wolodzko</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#my-projects">My Projects</Nav.Link>
          <Nav.Link href="/cv.pdf">CV</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
