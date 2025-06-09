import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../pages_css/BookAppointment.css";

function BookAppointment() {
  const location = useLocation();
  
  // State for form fields
  const [appointmentType, setAppointmentType] = useState("");
  const [appointmentLocation, setAppointmentLocation] = useState("");
  const [appointmentConcern, setAppointmentConcern] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [email, setEmail] = useState("");

  // Populate form if data is passed from another page
  useEffect(() => {
    if (location.state) {
      if (location.state.appointmentType) setAppointmentType(location.state.appointmentType);
      if (location.state.appointmentLocation) setAppointmentLocation(location.state.appointmentLocation);
      if (location.state.appointmentConcern) setAppointmentConcern(location.state.appointmentConcern);
    }
  }, [location]);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      appointmentType,
      appointmentLocation,
      appointmentConcern,
      appointmentDate,
      appointmentTime,
      email
    });
    
    // Show confirmation (could be replaced with redirect or modal)
    alert("Your appointment has been booked. Please check your email for confirmation.");
  };

  return (
    <div className="appointment-page">
      <Container className="py-4">
        <h1 className="mb-4 text-center">Book Your Appointment</h1>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Appointment type: (e.g. general)</Form.Label>
            <Form.Select 
              value={appointmentType} 
              onChange={(e) => setAppointmentType(e.target.value)}
              required
              className="form-control-lg"
            >
              <option value="">Select appointment type</option>
              <option value="general">General Checkup</option>
              <option value="pediatric">Pediatric Care</option>
              <option value="mental-health">Mental Health</option>
              <option value="specialist">Specialist Consultation</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select location: (virtual, in-clinic)</Form.Label>
            <Form.Select 
              value={appointmentLocation} 
              onChange={(e) => setAppointmentLocation(e.target.value)}
              required
              className="form-control-lg"
            >
              <option value="">Select location</option>
              <option value="virtual">Virtual</option>
              <option value="downtown">Downtown Clinic</option>
              <option value="westend">West End Clinic</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Concerns: (e.g. Autism, ADHD)</Form.Label>
            <Form.Select 
              value={appointmentConcern} 
              onChange={(e) => setAppointmentConcern(e.target.value)}
              className="form-control-lg"
            >
              <option value="">Select primary concern</option>
              <option value="checkup">Regular Checkup</option>
              <option value="adhd">ADHD Evaluation</option>
              <option value="anxiety">Anxiety</option>
              <option value="depression">Depression</option>
              <option value="autism">Autism Assessment</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Appointment Date:</Form.Label>
            <Form.Control 
              type="date" 
              value={appointmentDate} 
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
              className="form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select available time:</Form.Label>
            <Form.Select 
              value={appointmentTime} 
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
              className="form-control-lg"
            >
              <option value="">Select time</option>
              <option value="9:00AM">9:00AM</option>
              <option value="10:00AM">10:00AM</option>
              <option value="11:00AM">11:00AM</option>
              <option value="1:00PM">1:00PM</option>
              <option value="2:00PM">2:00PM</option>
              <option value="3:00PM">3:00PM</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email:</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="someone@email.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control-lg"
            />
          </Form.Group>

          <div className="d-grid gap-2 mb-3">
            <Button 
              type="submit" 
              className="book-now-btn"
            >
              Book Now
            </Button>
          </div>
        </Form>
        
        <div className="appointment-notes text-center">
          <p className="text-danger">Please do not book multiple appointments within the same calendar day.</p>
          <p className="text-black">If you have not received a confirmation email, please ensure you check your spam folder</p>
        </div>
      </Container>
    </div>
  );
}

export default BookAppointment;