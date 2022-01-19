import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg"  variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Lore APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Productos</Nav.Link>
        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Accesorios</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Indumentaria</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Catalogo Completo
          </NavDropdown.Item>
        </NavDropdown>          
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
