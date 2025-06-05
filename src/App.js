import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar bg="light" expand="lg" className="px-4">
        <Navbar.Brand href="#">
          <i className="bi bi-heart-fill text-danger me-2"></i>
          Catalyst Health
        </Navbar.Brand>
        <Nav className="ms-auto d-none d-lg-flex">
          <Nav.Link href="#">XXXX</Nav.Link>
          <Nav.Link href="#">XXXX</Nav.Link>
          <Nav.Link href="#">XXXX</Nav.Link>
          <Nav.Link href="#">XXXX</Nav.Link>
          <Nav.Link href="#">XXXX</Nav.Link>
          <Nav.Link href="#">FR</Nav.Link>
        </Nav>
      </Navbar>

      {/* Hero Section */}
      <div
        className="hero-section text-center text-white"
        style={{
          backgroundImage: `url("https://via.placeholder.com/1200x400")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0"
        }}
      >
        <h2 className="fw-bold">Your Family’s Health Starts Here</h2>
        <Button variant="outline-light" className="my-3">
          Book an Appointment
        </Button>
        <p className="text-light small">
          Specialist & Family Care | Virtual & In-Clinic Visits
        </p>
      </div>

      {/* Welcome Section */}
      <Container className="text-center my-5">
        <h5 className="fw-bold">Welcome to Catalyst Health</h5>
        <p className="text-muted small">
          Catalyst Medical provides compassionate, accessible healthcare tailored to your needs.
        </p>
      </Container>

      {/* Info Tiles Section */}
      {/* Info Tiles Section */}
      <Container className="my-5">
        <Row className="g-4" xs={1} md={3}>
          {[
            { title: "Mental Health", iconClass: "fas fa-brain", color: "#5d9cec", useFA: true },
            { title: "Providers", iconClass: "bi bi-person-badge", color: "#6c8ea6" },
            { title: "Locations", iconClass: "bi bi-geo-alt", color: "#89a4a6" },
            { title: "Book Appointment", iconClass: "bi bi-calendar-check", color: "#5c7fa3" },
            { title: "Parking", iconClass: "fas fa-parking", color: "#7ca0a2", useFA: true },
            { title: "FAQs", iconClass: "bi bi-question-circle", color: "#68afc0" }
          ].map((tile, idx) => (
            <Col key={idx}>
              <div
                className="info-tile h-100 d-flex flex-column justify-content-center align-items-center"
                style={{ backgroundColor: tile.color }}
              >
                <i className={`${tile.iconClass} icon`}></i>
                <div className="tile-text">{tile.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>


    </>
  );
}

export default App;
