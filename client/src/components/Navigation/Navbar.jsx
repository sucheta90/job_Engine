import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import auth from "../../utils/auth";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";

export default function NavHeader() {
  // Main Navbar

  const currentPage = useLocation().pathname;
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="/" className={currentPage === "/" ? "active" : ""}>
          Worknado
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/about"
              className={currentPage === "/about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/employer"
              className={currentPage === "/employer" ? "active" : ""}
            >
              Employer
            </Nav.Link>
            {/* <NavDropdown title="Job Seekers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="">
            {auth.loggedIn() ? (
              <Nav.Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    auth.logout();
                  }}
                  className="btn btn-light"
                >
                  Log Out
                </button>
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
