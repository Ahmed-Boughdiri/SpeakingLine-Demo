import React from "react";
import { Col, Card, Image, Button, Row, Badge } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { InstructorProps } from "../global/instructors";

import england from "../assets/england-1.png";
import heartOutline from "../assets/heart-outline.png";
import star from "../assets/star.png";

// The Instructor Component

const Instructor: React.FC<{ instructor: InstructorProps }> = ({
  instructor,
}) => {
  // Animation Configuration
  const animation = {
    from: {
      opacity: 0,
      transform: "translateY(-30px)",
    },
    opacity: 1,
    transform: "translateY(0px)",
    config: {
      duration: 750,
    },
  };
  const props = useSpring(animation);

  return (
    <Col md={6}>
      <animated.div style={props}>
        <Card className="instructor-card shadow">
          <Card.Body>
            <Row className="card-content">
              <Col md={3}>
                <div
                  className={`card-thumb ${
                    instructor.status === "ACTIVE" && "active"
                  } ${instructor.status === "BUSSY" && "bussy"} ${
                    instructor.status === "UNAVAILABLE" && "unavailable"
                  }`}
                >
                  <Image
                    src={instructor.thumb as string}
                    style={{ width: "100%" }}
                    height={95}
                  />
                  <div className="image-shadow"></div>
                  {/* TODO: Working on the status (does not appear properly) */}
                  <p
                    className={`card-status ${
                      instructor.status === "ACTIVE" && "active-status"
                    } ${instructor.status === "BUSSY" && "bussy-status"} ${
                      instructor.status === "UNAVAILABLE " &&
                      "unavailable-status"
                    }`}
                  >
                    Müsait
                  </p>
                </div>
                {instructor.availableMinutes && (
                  <p className="card-time text-muted">
                    {instructor.availableMinutes} dakika sonra meşgul
                  </p>
                )}
              </Col>
              <Col md={9} className="card-details">
                <Row>
                  <Col sm={10}>
                    <h5>
                      {instructor.name}{" "}
                      <Badge className="card-flag">
                        <Image src={england} />
                      </Badge>
                    </h5>
                    <Row className="rating-container">
                      <Col sm={2}>
                        <Image src={star} />
                      </Col>
                      <Col sm={10}>
                        <p className="text-left rating-text text-muted">
                          {instructor.rating}/5
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={2}>
                    <Image src={heartOutline} style={{ cursor: "pointer" }} />
                  </Col>
                </Row>
                <p className="text-left">
                  <span className="text-muted">Konuştuğu Diller:</span>
                  {instructor.spokenLanguages.map(
                    (spl: any) => " " + spl + ","
                  )}
                </p>
                <p className="text-left">
                  <span className="text-muted">Uzmanlık Alanları:</span>
                  {instructor.specialization.map((sp: any) => " " + sp + ",")}
                </p>
              </Col>
            </Row>
            <Row className="btns">
              {instructor.status !== "ACTIVE" ? (
                <Button variant="secondary" className="btn-comp" disabled>
                  Pratik Yap
                </Button>
              ) : (
                <Button className="btn-comp practice-btn">Pratik Yap</Button>
              )}{" "}
              <Button
                variant="primary"
                className="btn-comp"
                style={{ paddingLeft: 20, paddingRight: 20 }}
              >
                Rezervasyon Yap
              </Button>{" "}
              <Button className="btn-comp muted-btn">Mesaj Gönder</Button>{" "}
              <Button className="btn-comp muted-btn">Profil</Button>{" "}
            </Row>
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  );
};

export default Instructor;
