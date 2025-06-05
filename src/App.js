import React from "react";
import {
  Navbar,
  Container,
  Button,
  Row,
  Col
} from "react-bootstrap";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import MentalHealth from "./pages/MentalHealth";
import Providers from "./pages/Providers";
import Locations from "./pages/Locations";
import Pediatrics from "./pages/Pediatrics";
import Parking from "./pages/Parking";
import FAQs from "./pages/FAQs";
import BookAppointment from "./pages/BookAppointment";  // <-- Import here

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
        className="hero-section text-center text-white"
        style={{
          backgroundImage: `url("https://via.placeholder.com/1200x400")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0"
        }}
      >
        <h2 className="fw-bold">Your Family’s Health Starts Here</h2>
        <Link to="/book-appointment">
          <Button variant="outline-light" className="my-3">
            Book Appointment
          </Button>
        </Link>
        <p className="text-light small">
          Specialist & Family Care | Virtual & In-Clinic Visits
        </p>
      </div>

      <Container className="text-center my-5">
        <h5 className="fw-bold">Welcome to Catalyst Health</h5>
        <p className="text-muted small">
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
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4">
        <Navbar.Brand as={Link} to="/" style={{ cursor: "pointer" }}>
          <i className="bi bi-heart-fill text-danger me-2"></i>
          Catalyst Health
        </Navbar.Brand>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/book-appointment" element={<BookAppointment />} /> {/* New route */}
      </Routes>
    </>
  );
}

export default App;
