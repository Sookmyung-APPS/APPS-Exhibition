import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IntroduePage from "../Pages/IntroducePage";


function Header(props) {
  return (
    <Router>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../Assets/apps_logo.png").default}
            width="150"
            height="75"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/info">소개</Nav.Link>
            <Nav.Link href="#link">프로젝트</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      
    <Switch>
      
      <Route path="/info">
        <IntroduePage/>
      </Route>
    </Switch>
  </div>
  </Router> 
    
  );
}

export default Header;
