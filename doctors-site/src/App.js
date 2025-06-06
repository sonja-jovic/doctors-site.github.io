// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { Container, Row, Col, Card, Button, Accordion, Form, Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Catalyst Health</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#faq">FAQs</Nav.Link>
              <Nav.Link href="#book-appointment">Book Appointment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Landing Section */}
      <section id="home" className="text-center p-5 bg-light">
        <h1 className="mb-3">Catalyst Health</h1>
        <p>Your Family’s Health Starts Here</p>
        <Button variant="primary" href="#book-appointment">Book an Appointment</Button>
      </section>

      {/* Services Cards Section */}
      <section id="services" className="p-4">
        <Row>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Pediatric Care</Card.Title>
                <Card.Text>
                  Compassionate care for your child’s physical, emotional, and developmental health.
                </Card.Text>
                <Button variant="outline-primary" href="#pediatric-info">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Mental Health</Card.Title>
                <Card.Text>
                  Services for anxiety, ADHD, depression, behavioural issues, and more.
                </Card.Text>
                <Button variant="outline-primary" href="#mental-info">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* General Questions Section */}
      <section id="faq" className="bg-light p-4">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I access services?</Accordion.Header>
            <Accordion.Body>
              Book online or call directly. Virtual and in-clinic options available.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What should I expect?</Accordion.Header>
            <Accordion.Body>
              A caring, patient-focused experience with licensed professionals.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Mental Health Details Section */}
      <section id="mental-info" className="p-4">
        <h3>Mental Health Services</h3>
        <p>Our clinic offers bilingual services for various mental health concerns including ADHD, anxiety, and more.</p>
        <Accordion className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services are offered?</Accordion.Header>
            <Accordion.Body>
              We offer consultations, evaluations, therapy sessions, and referrals.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant="primary" href="#book-appointment">Book Appointment</Button>
      </section>

      {/* Pediatric Care Details Section */}
      <section id="pediatric-info" className="p-4 bg-light">
        <h3>Pediatric Services</h3>
        <p>We provide care for ADHD evaluation, general check-ups, and developmental monitoring.</p>
        <Accordion className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I start the ADHD diagnostic process?</Accordion.Header>
            <Accordion.Body>
              Begin by booking an appointment under Pediatric Care and indicate ADHD concerns.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant="primary" href="#book-appointment">Book Appointment</Button>
      </section>

      {/* Booking Page Section */}
      <section id="book-appointment" className="p-4">
        <h3>Book an Appointment</h3>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Appointment Type</Form.Label>
            <Form.Select>
              <option>Pediatric Care</option>
              <option>Mental Health</option>
              <option>General Consultation</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Concerns</Form.Label>
            <Form.Control type="text" placeholder="E.g., ADHD, Anxiety" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select>
              <option>Virtual</option>
              <option>In-Clinic</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="success">Book Now</Button>
        </Form>
      </section>

      {/* Footer */}
      <footer className="text-center mt-5 p-4 bg-dark text-white">
        <p>Created by Zeke & Sonja | Catalyst Health | About | Services | Privacy Policy</p>
      </footer>
    </Container>
  );
}

export default App;