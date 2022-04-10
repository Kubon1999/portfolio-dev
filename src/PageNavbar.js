import { Navbar, Container, Nav } from "react-bootstrap";

const PageNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Jakub Wolodzko</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#my-projects">My Projects</Nav.Link>
            <Nav.Link href="/cv.pdf">CV</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
