import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "../../icon/CartIcon";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">My E-Commerce</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/phones"> SmartPhones</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/tv"> TV </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/pc">Computadoras</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/accesorios"> Accesorios Gamer</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
               to="/"><CartIcon /></NavLink>
        
      </Container>
    </Navbar>
  )
}

export default NavBar
