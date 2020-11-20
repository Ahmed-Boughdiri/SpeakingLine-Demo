import React, { useEffect } from "react";
import "../layout/Instructors.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect, useDispatch } from "react-redux";
import Instructor from "./Instructor";
import { InstructorProps } from "../global/instructors";

// The Instructors Section

const Instructors: React.FC<{
  instructors: InstructorProps[];
  startAnimation: any;
  loadAnimation: any;
}> = ({ instructors, startAnimation, loadAnimation }) => {
    
  // Update The Status For The Instructor Each 10s
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "REFRESH_INSTRUCTORS" });
      loadAnimation();
    }, 10000);
  }, []);

  return (
    <div className="instructors">
      <Container>
        <Row>
          {startAnimation &&
            instructors.map((instructor: InstructorProps) => (
              <Instructor instructor={instructor} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

// Connecting To The Redux

interface StoreProps {
  instructorsReducer: InstructorProps[];
}

function mapStateToProps(state: StoreProps) {
  return {
    instructors: state.instructorsReducer,
  };
}

export default connect(mapStateToProps)(Instructors);
