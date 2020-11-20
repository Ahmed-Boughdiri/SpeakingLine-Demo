import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "../layout/NavBar.css";

import questionsIcon from "../assets/questions-icon.png";
import messageIcon from "../assets/message-icon.png";
import notificationIcon from "../assets/notification-icon.png";
import profileIcon from "../assets/profile-icon.png";

// The Nav Bar Component

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bar pt-4">
        <Container>
          {/* The Nav Bar Logo And Brand */}
          <Navbar.Brand href="#home" className="nav-bar-brand">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SpeakingLine
          </Navbar.Brand>
          <Nav className="nav">
            {/* The Nav Bar Links */}
            <Nav.Link href="#deets">Eğitmenler</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Geçmiş
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Rezervasyonlar
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Eğitimler
            </Nav.Link>
            {/* The Nav Bar Icons */}
            <div className="nav-bar-icons">
              <Nav.Link eventKey={2} href="#memes" className="ml-3">
                <Image src={questionsIcon} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Image src={messageIcon} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Image src={notificationIcon} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Image src={profileIcon} />
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
