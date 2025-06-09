import React, { useState } from "react";
import { Container, Accordion, Card, useAccordionButton, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const pediatricsColor = "rgba(92, 127, 163, 0.3)"; // Light blue for pediatrics
const expandedContentBgColor = "#ffffff";

function CustomToggle({ eventKey, callback, isActive }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (callback) callback(eventKey);
  });

  return (
    <div
      onClick={decoratedOnClick}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30px",
      }}
    >
      <span>{isActive ? "−" : "+"}</span>
    </div>
  );
}

export default function Pediatrics() {
  const navigate = useNavigate();
  // activeKey is now an array of keys that are open
  const [activeKeys, setActiveKeys] = useState([]);

  const handleToggle = (key) => {
    if (activeKeys.includes(key)) {
      // remove key to close accordion
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      // add key to open accordion
      setActiveKeys([...activeKeys, key]);
    }
  };

  const handleBookPediatricsAppointment = () => {
    navigate('/book-appointment', {
      state: {
        appointmentType: 'pediatric',
        appointmentLocation: 'downtown',
        appointmentConcern: 'checkup'
      }
    });
  };

  const accordions = [
    {
      key: "0",
      title: "OUR PEDIATRIC SERVICES",
      content: "Our pediatric services cover all aspects of child health from newborn care to adolescent medicine. We offer well-child visits, vaccinations, developmental assessments, and treatment for acute and chronic conditions. Our team is dedicated to providing comprehensive care for your child's physical, emotional, and developmental needs.",
    },
    {
      key: "1",
      title: "WHAT TO EXPECT",
      content: "During your child's visit, our pediatrician will conduct a thorough examination, discuss developmental milestones, and address any concerns you may have. We create a comfortable and friendly environment to help children feel at ease during their appointments. First-time visits typically last around 45 minutes, while follow-up appointments are usually 30 minutes.",
    },
    {
      key: "2",
      title: "FAQs",
      content: (
        <div
          dangerouslySetInnerHTML={{
            __html: `
      Q: How often should my child have check-ups?<br />
      A: We recommend check-ups at 2 weeks, 2, 4, 6, 9, 12, 15, and 18 months, then annually after age 2.<br /><br />

      Q: Do you provide vaccinations?<br />
      A: Yes, we follow the recommended immunization schedule and discuss each vaccine with parents.<br /><br />

      Q: How do I prepare my child for their first visit?<br />
      A: Talk positively about the visit, bring a comfort item, and prepare questions in advance.<br /><br />

      Q: What should I bring to my child's appointment?<br />
      A: Bring your child's health card, immunization records, list of medications, and any medical history.<br /><br />

      Q: Do you handle emergencies?<br />
      A: We offer same-day sick visits during office hours. For after-hours emergencies, please go to the nearest emergency room.<br /><br />

      Q: How do you handle behavioral or developmental concerns?<br />
      A: We perform developmental screenings at regular intervals and can refer to specialists when needed.<br /><br />

      Q: At what age should my child first see a dentist?<br />
      A: We recommend the first dental visit around the first birthday or when the first tooth appears.<br /><br />

      Q: Do you provide advice on nutrition and healthy eating?<br />
      A: Yes, nutritional guidance is an important part of our well-child visits.<br /><br />

      Q: How do you support children with chronic conditions?<br />
      A: We develop personalized care plans and coordinate with specialists as needed.<br /><br />

      Q: How do you handle vaccine-hesitant parents?<br />
      A: We respect parents' concerns and provide evidence-based information to help make informed decisions.
                `,
          }}
        />
      ),
    },
    {
      key: "3",
      title: "COMMON CHILDHOOD CONDITIONS",
      content: "Our pediatric team is experienced in treating common childhood conditions including ear infections, strep throat, asthma, allergies, eczema, and behavioral issues. We also provide guidance on managing chronic conditions such as asthma, allergies, and developmental disorders. Our goal is to provide the most appropriate and effective care for each child's specific needs.",
    },
  ];

  return (
    <Container className="my-5" style={{ textAlign: "left" }}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        <div className="d-flex align-items-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            style={{ marginRight: '0.75rem' }}
          >
            <path
              fill="#5c7fa3"
              d="M7.412 17.353a8.75 8.75 0 0 1-3.742-5.54a2.244 2.244 0 0 1-2.17-2.25c0-1.22 1.01-2.25 2.25-2.25h.19c1.18-3.56 4.51-6 8.31-6s7.15 2.45 8.32 6.02c1.09.16 1.93 1.09 1.93 2.23c0 1.04-.7 1.91-1.66 2.17a8.74 8.74 0 0 1-3.754 5.62A6.77 6.77 0 0 1 19 22.063c0 .41-.34.75-.75.75s-.75-.34-.75-.75a5.27 5.27 0 0 0-1.8-3.96a8.7 8.7 0 0 1-3.45.71a8.7 8.7 0 0 1-3.45-.709l-.02.019c-1.13 1-1.78 2.44-1.78 3.94c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.76.69-3.455 1.912-4.71M12.25 5.152a6.76 6.76 0 0 1-6 3.66h-1.5a1 1 0 0 1-.123-.01a1 1 0 0 1-.127.01h-.75c-.41 0-.75.34-.75.75s.34.75.75.75h.56c.38 0 .7.28.74.66c.45 3.62 3.54 6.34 7.2 6.34s6.75-2.73 7.2-6.34c.05-.38.37-.66.74-.66c.47 0 .81-.34.81-.75s-.34-.75-.75-.75H20a1 1 0 0 1-.125-.01a1 1 0 0 1-.125.01h-1.5a6.76 6.76 0 0 1-6-3.66m6.707 2.16h-.707c-2.62 0-4.804-1.939-5.19-4.454a7.25 7.25 0 0 1 5.897 4.454m-12.707 0c2.62 0 4.804-1.939 5.19-4.454a7.25 7.25 0 0 0-5.9 4.454zm6 8.5c-.96 0-1.75-.79-1.75-1.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75c0 .96-.79 1.75-1.75 1.75m-3-4.74c-.55 0-1-.45-1-1s.45-1 1-1s1 .44 1 1s-.45 1.01-1 1.01zm5-1c0 .55.45 1 1 1v.01c.55 0 1-.45 1-1.01s-.45-1-1-1s-1 .45-1 1"
            />
          </svg>
          <h2 className="info" style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>
            Pediatrics
          </h2>
        </div>
        <Button
          variant="outline-dark"
          className="pediatrics-btn mt-3 mt-md-0"
          onClick={handleBookPediatricsAppointment}
        >
          Book Pediatric Appointment
        </Button>
      </div>

      <p className="text-muted small" style={{ width: "100%" }}>
        Our pediatric department is dedicated to providing exceptional care for infants, children, and adolescents.
        We focus on preventive health, developmental milestones, and treating a wide range of childhood conditions.
        Our child-friendly environment and compassionate approach help make healthcare a positive experience for young patients.
      </p>

      {/* Accordion sections */}
      <Accordion flush>
        {accordions.map(({ key, title, content }) => {
          const isActive = activeKeys.includes(key);
          return (
            <Card
              key={key}
              style={{ backgroundColor: pediatricsColor, marginBottom: "1.5rem" }}
            >
              <Card.Header
                onClick={() => handleToggle(key)}
                style={{
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: pediatricsColor,
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.1rem",
                }}
              >
                <div>{title}</div>
                <CustomToggle eventKey={key} isActive={isActive} />
              </Card.Header>
              <Accordion.Collapse
                eventKey={key}
                in={isActive} // control open/close manually
              >
                <Card.Body
                  style={{
                    backgroundColor: expandedContentBgColor,
                    color: "black",
                    fontSize: "0.9rem",
                  }}
                >
                  {content}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>

      {/* Bottom button */}
      <div className="text-center mt-5">
        <Button
          variant="outline-dark"
          className="pediatrics-btn-filled"
          onClick={handleBookPediatricsAppointment}
        >
          Book Pediatric Appointment
        </Button>
      </div>
    </Container>
  );
}