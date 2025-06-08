// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

// export default function MentalHealth() {
//   const navigate = useNavigate();
  
//   const handleBookMentalHealthAppointment = () => {
//     navigate('/book-appointment', { 
//       state: { 
//         appointmentType: 'mental-health',
//         appointmentLocation: 'virtual',
//         appointmentConcern: 'anxiety'
//       } 
//     });
//   };

//   return (
//     <Container>
//       {/* Your page content here */}
//       <Button 
//         variant="outline-dark"
//         className="button-base"
//         onClick={handleBookMentalHealthAppointment}
//       >
//         Book Mental Health Appointment
//       </Button>
//     </Container>
//   );
// }
import React, { useState } from "react";
import { Container, Accordion, Card, useAccordionButton } from "react-bootstrap";

const locationsColor = "#89a4a6";
const expandedContentBgColor = "#e5ebec";

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

export default function MentalHealth() {
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

  const accordions = [
    {
      key: "0",
      title: "HOW TO ACCESS",
      content: "To access mental health services, you can book an appointment online through our website or call our clinic directly. We also offer walk-in hours for urgent needs.",
    },
    {
      key: "1",
      title: "WHAT TO EXPECT",
      content: "During your visit, a qualified professional will listen to your concerns and work with you to create a personalized plan. You can expect a safe and confidential environment.",
    },
    {
      key: "2",
      title: "FAQs",
      content: (
            <div
              dangerouslySetInnerHTML={{
                __html: `
      Q: How do I book an appointment?<br />
      A: You can book online through our website or call our clinic directly.<br /><br />

      Q: Do you accept insurance?<br />
      A: Yes, we accept most major insurance plans. Please check with us for details.<br /><br />

      Q: Are services confidential?<br />
      A: Yes, all sessions are private and confidential.<br /><br />

      Q: Can I walk in without an appointment?<br />
      A: We offer limited walk-in hours for urgent needs, but booking an appointment is recommended.<br /><br />

      Q: Do you offer virtual consultations?<br />
      A: Yes, virtual appointments are available for your convenience.<br /><br />

      Q: What should I bring to my first appointment?<br />
      A: Please bring any relevant medical records and a list of current medications.<br /><br />

      Q: How long does a typical session last?<br />
      A: Sessions usually last about 50 minutes.<br /><br />

      Q: Can I reschedule or cancel an appointment?<br />
      A: Yes, please notify us at least 24 hours in advance to reschedule or cancel.<br /><br />

      Q: Are your services available in other languages?<br />
      A: Yes, we offer bilingual services in English and French.<br /><br />

      Q: What if I need urgent help outside clinic hours?<br />
      A: For emergencies, please call 911 or visit the nearest emergency room.
                `,
              }}
            />
          ),
        },
      ];

  return (
    <Container className="my-5" style={{ textAlign: "left" }}>
      <h2 className="info" style={{ fontSize: "3.5rem" }}>
        Mental Health
      </h2>
      <p className="text-muted small" style={{ width: "100%" }}>
        Our clinic offers mental health services. Please refer below for more information. The services we offer are bilingual and can address a range of issues such as behavioural issues in children, anxiety, depression, and more.
      </p>


      {/* Don't pass activeKey prop to Accordion for manual control */}
      <Accordion flush>
        {accordions.map(({ key, title, content }) => {
          const isActive = activeKeys.includes(key);
          return (
            <Card
              key={key}
              style={{ backgroundColor: locationsColor, marginBottom: "1rem" }}
            >
              <Card.Header
                onClick={() => handleToggle(key)}
                style={{
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: locationsColor,
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
    </Container>
  );
}
