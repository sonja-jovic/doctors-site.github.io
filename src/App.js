import React from "react";
import {
  Navbar,
  Container,
  Button,
  Row,
  Col,
  Nav
} from "react-bootstrap";

import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";
import MentalHealth from "./pages/MentalHealth";
import Providers from "./pages/Providers";
import Locations from "./pages/Locations";
import Pediatrics from "./pages/Pediatrics";
import Parking from "./pages/Parking";
import FAQs from "./pages/FAQs";
import BookAppointment from "./pages/BookAppointment";  // <-- Import here
import heroImage from './assets/herosection2.jpg';

// Footer component
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        marginTop: "auto",
        borderTop: "1px solid #2B2B2B",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#555"
      }}
    >
      <Container>
        <div>Catalyst Health</div>
        <div>123 Fake Street, Ottawa, Ontario, K1A 0B1</div>
        <div>Phone: (613) 555-1234 | Email: info@catalysthealth.ca</div>
        <div>Website designed by Sonja J and Hezekiah S</div>
      </Container>
    </footer>
  );
}

// Home page component
function Home() {
  const tiles = [
    { title: "Mental Health", iconClass: "fas fa-brain", color: "#5d9cec", path: "/mental-health" },
    { title: "Providers", iconClass: "bi bi-person-badge", color: "#6c8ea6", path: "/providers" },
    { title: "Locations", iconClass: "bi bi-geo-alt", color: "#89a4a6", path: "/locations" },
    { title: "Pediatrics", iconClass: "bi bi-calendar-check", color: "#5c7fa3", path: "/pediatrics" },
    { title: "Parking", iconClass: "fas fa-parking", color: "#7ca0a2", path: "/parking" },
    { title: "FAQs", iconClass: "bi bi-question-circle", color: "#68afc0", path: "/faqs" }
  ];

  return (
    <>
      <div
        className="hero-section text-center text-dark d-flex flex-column justify-content-between align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          minHeight: "450px",
          borderBottom: "1px solid #2B2B2B",
        }}
      >
        {/* Top content with responsive display sizing */}
        <h2 className="fw-bold d-block d-sm-none display-6">Welcome to Catalyst Health</h2>
        <h2 className="fw-bold d-none d-sm-block d-md-none display-6">Welcome to Catalyst Health</h2>
        <h2 className="fw-bold d-none d-md-block d-lg-none display-5">Welcome to Catalyst Health</h2>
        <h2 className="fw-bold d-none d-lg-block display-4">Welcome to Catalyst Health</h2>

        {/* Center icon - only visible on small screens */}
        <div className="d-block d-sm-none my-4 display-1">
          <i className="bi bi-heart-pulse-fill text-dark" ></i>
        </div>

        {/* Middle content */}
        <div className="my-3">
          <Link to="/book-appointment">
            {/* Large screens - larger button */}
            <Button variant="outline-dark" className="d-none d-md-inline-block button-base btn-lg">
              <i className="bi bi-calendar-check me-2"></i>
              Book Appointment
            </Button>
            {/* Medium screens - medium button */}
            <Button variant="outline-dark" className="d-none d-sm-inline-block d-md-none button-base">
              Book Appointment
            </Button>
            {/* Small/Extra small screens */}
            <Button variant="outline-dark" className="d-sm-none button-base-mobile btn-sm">
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Bottom content */}
        <div className="mt-auto d-none d-lg-block">
        </div>
      </div>

      <Container className="text-center my-5">
        <h5 className="fw-bold fs-3">Your Family's Health Starts Here!</h5>
        <p className="text-muted fs-5">
          Catalyst Medical provides compassionate, accessible healthcare tailored to your needs.
        </p>
      </Container>

      <Container className="my-5">
        <Row className="g-4 px-5 px-sm-4 px-md-3 px-lg-0" xs={1} md={3}>
          {tiles.map((tile, idx) => (
            <Col key={idx}>
              <Link to={tile.path} style={{ textDecoration: "none" }}>
                <div
                  className="info-tile h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: tile.color }}
                >
                  <i className={`${tile.iconClass} icon`}></i>
                  <div className="tile-text">{tile.title}</div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

// Main App
function App() {
  document.title = "Catalyst Health";

  return (
    <>

      <Navbar className="bg-body-primary-base text-dark" expand="md" sticky="top" style={{ boxShadow: "0 2px 4px rgba(43, 43, 43, 0.24)" }}>
        <Container fluid className="px-3">
          <Navbar.Brand as={Link} to="/" className="fw-bold brand-logo" style={{ cursor: "pointer" }}>
            <i className="bi bi-heart-pulse-fill d-inline-block align-top" width="30"
              height="30"></i>{' '}
            Catalyst Health
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-normal">
              <Nav.Link as={Link} to="/mental-health">Mental Health</Nav.Link>
              <Nav.Link as={Link} to="/providers">Providers</Nav.Link>
              <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
              <Nav.Link as={Link} to="/pediatrics">Pediatrics</Nav.Link>
              <Nav.Link as={Link} to="/parking">Parking</Nav.Link>
              <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: "0", overflow: "hidden" }}>
        <div style={{ flex: 1 }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
            <Route path="/parking" element={<Parking />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
