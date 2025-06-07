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
import heroImage from './assets/herosection.jpg';

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
          borderBottom: "1px solid #2B2B2B"
        }}
      >
        {/* Top content */}
        <h2 className="fw-bold display-6">Your Family's Health Starts Here</h2>

        {/* Middle content */}
        <div className="my-3">
          <Link to="/book-appointment">
            <Button variant="outline-dark" className="btn-lg d-none d-lg-inline-block button-base">
              Book Appointment
            </Button>
            <Button variant="outline-dark" className="btn-lg d-lg-none button-base-mobile text-dark">
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Bottom content */}
        <div className="mt-auto d-none d-lg-block">
          <p className="text-dark fw-bold mb-0">
            Specialist & Family Care | Virtual & In-Clinic Visits
          </p>
        </div>
      </div>

      <Container className="text-center my-5">
        <h5 className="fw-bold fs-3">Welcome to Catalyst Health</h5>
        <p className="text-muted fs-5">
          Catalyst Medical provides compassionate, accessible healthcare tailored to your needs.
        </p>
      </Container>

      <Container className="my-5">
        <Row className="g-4" xs={1} md={3}>
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

      <Navbar className="bg-body-primary-base text-dark" expand="lg" sticky="top" style={{ boxShadow: "0 2px 4px rgba(43, 43, 43, 0.24)" }}>
        <Container fluid className="px-3">
          <Navbar.Brand as={Link} to="/" style={{ cursor: "pointer" }}>
            <i className="bi bi-heart-pulse-fill d-inline-block align-top" width="30"
              height="30"></i>{' '}
            Catalyst Health
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1 }}>
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
