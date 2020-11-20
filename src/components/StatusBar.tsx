import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert, Badge } from "react-bootstrap";
import "../layout/StatusBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { InstructorProps } from "../global/instructors";

// The Status Bar Props

interface StatusBarProps {
  loadActiveInstructors: () => void;
  loadBussyInstructors: () => void;
  loadUnavailableInstructors: () => void;
  loadInstructors: () => void;
  loadAnimation: () => void;
  instructors: any[];
}

// The Status Bar Section

const StatusBar: React.FC<StatusBarProps> = ({
  loadActiveInstructors,
  loadBussyInstructors,
  loadUnavailableInstructors,
  loadInstructors,
  loadAnimation,
  instructors,
}) => {
  // All The Information About The Status Buttons
  const [status, setStatus] = useState([
    {
      name: "Tümü",
      active: true,
      color: "red",
      number: 0,
      action: () => {
        loadInstructors();
        loadAnimation();
        setStatus((prevStatus: any) => {
          prevStatus.forEach((state: any) => (state.active = false));
          prevStatus[0].active = true;
          console.log(instructors);
          prevStatus[0].amountOfResults = instructors.length;
          return prevStatus;
        });
      },
      amountOfResults: instructors.length,
    },
    {
      name: "Müsait",
      active: false,
      color: "#00D21D",
      number: 0,
      action: () => {
        loadActiveInstructors();
        loadAnimation();
        setStatus((prevStatus: any) => {
          prevStatus.forEach((state: any) => (state.active = false));
          prevStatus[1].active = true;
          console.log(instructors);
          prevStatus[1].amountOfResults = instructors.length;
          return prevStatus;
        });
      },
      amountOfResults: instructors.length,
    },
    {
      name: "Meşgul",
      active: false,
      color: "#EE3F46",
      number: 0,
      action: () => {
        loadBussyInstructors();
        loadAnimation();
        setStatus((prevStatus: any) => {
          prevStatus.forEach((state: any) => (state.active = false));
          prevStatus[2].active = true;
          return prevStatus;
        });
      },
      amountOfResults: instructors.length,
    },
    {
      name: "Çevrimdışı",
      active: false,
      color: "#AAAAAA",
      number: 0,
      action: () => {
        loadUnavailableInstructors();
        loadAnimation();
        setStatus((prevStatus: any) => {
          prevStatus.forEach((state: any) => (state.active = false));
          prevStatus[3].active = true;
          return prevStatus;
        });
      },
      amountOfResults: instructors.length,
    },
    {
      name: "Favorilerim",
      active: false,
      color: "#52575C",
      number: 0,
      action: () => {
        console.log("Ahmed");
        setStatus((prevStatus: any) => {
          prevStatus.forEach((state: any) => (state.active = false));
          prevStatus[4].active = true;
          return prevStatus;
        });
      },
      amountOfResults: instructors.length,
    },
  ]);

  return (
    <>
      <div className="status-bar">
        <Container style={{ display: "flex" }}>
          {status.map((statue) => (
            <>
              {/* The Status Button */}
              <Alert
                className={`status ${statue.active && "active-statue"}`}
                onClick={statue.action}
              >
                <Alert.Link href="#">
                  {!statue.active && statue.name !== "Favorilerim" && (
                    <Badge
                      className="status-color"
                      style={{ backgroundColor: statue.color }}
                    >
                      {" "}
                    </Badge>
                  )}
                  {!statue.active && statue.name === "Favorilerim" && (
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="statue-icon"
                      color={statue.color}
                    />
                  )}
                  {statue.name}
                  {statue.active && (
                    <Badge className="statue-number">
                      {statue.amountOfResults}
                    </Badge>
                  )}
                </Alert.Link>
              </Alert>
            </>
          ))}
        </Container>
      </div>
    </>
  );
};

// Redux Configuration

interface StateProps {
  instructorsReducer: InstructorProps[];
}

function mapStateToProps(state: StateProps) {
  return {
    instructors: state.instructorsReducer,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    loadActiveInstructors: () => dispatch({ type: "LOAD_ACTIVE_INSTRUCTORS" }),
    loadBussyInstructors: () => dispatch({ type: "LOAD_BUSSY_INSTRUCTORS" }),
    loadUnavailableInstructors: () =>
      dispatch({ type: "LOAD_UNAVAILABLE_INSTRUCTORS" }),
    loadInstructors: () => dispatch({ type: "LOAD_INSTRUCTORS" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
