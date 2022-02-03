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
            {/* <Nav.Link>
              <NavLink
                to="/item"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Item
              </NavLink>
            </Nav.Link> */}
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/cars"
                >
                  Carros
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/phones"
                >
                  Teléfonos
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/audio-interfaces"
                >
                  Interfaces de audios
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/computers"
                >
                  Computadores
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar>
  )
}

export default NavBar
