import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidge from "../cart/CartWidge";

const NavBar = () => {
  return (
    <header className="header">
      <div className="tituloNav container-fluid">
      <Link className="text-decoration-none" to="/">
                <h1 className="tituloH1">Bug-Technology</h1>
            </Link>
        <CartWidge className="cartWidge text-decoration-none"/>
      </div>   

    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <Nav.Link href="/" >Principal</Nav.Link>          
            <NavDropdown title="Categorias" id="dropdown-button-dark-example1">
              <NavDropdown.Item>
                <NavLink 
                  to="category/phones"> <Button className="px-5" variant="outline-primary" size="sm">SmartPhones</Button></NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink 
                  to="category/accesorios"><Button className="px-5" variant="outline-primary" size="sm">Accesorios Gamer</Button>  </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                 
                  to="category/pc"><Button className="px-5" variant="outline-primary" size="sm">Computadoras</Button>  </NavLink>
              </NavDropdown.Item>            
              <NavDropdown.Item>
                <NavLink
                  to="category/tv"> <Button className="px-5" variant="outline-primary" size="sm">TV</Button>   </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBar
