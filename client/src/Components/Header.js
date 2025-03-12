import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <NavLink>
              <img src={logo} className="logo-t " />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Profile
            </NavLink>
          </NavItem>

          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
