import { instructors, InstructorProps } from "../global/instructors";

// The Function That Handle The Process Of Shuffling The Status Of Each Instructor
function refreshInstructors(instructors: InstructorProps[]) {
  // Shuffling The Status
  instructors = instructors.map((instructor: InstructorProps) => {
    const i = Math.floor(Math.random() * 3);
    const availableStatus = ["ACTIVE", "BUSSY", "UNAVAILABLE"];
    instructor.status = availableStatus[i];
    return instructor;
  });

  // Reordering The Instructors Based On Their Status
  let activeStatus: InstructorProps[] = [];
  let bussyStatus: InstructorProps[] = [];
  let unavailableStatus: InstructorProps[] = [];
  instructors.forEach((instructor: InstructorProps) => {
    if (instructor.status === "ACTIVE") {
      activeStatus.push(instructor);
    } else if (instructor.status === "BUSSY") {
      bussyStatus.push(instructor);
    } else {
      unavailableStatus.push(instructor);
    }
  });
  return [...activeStatus, ...bussyStatus, ...unavailableStatus];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = instructors, action: any): InstructorProps[] {
  switch (action.type) {
    // Loading All The Instructors Data
    case "LOAD_INSTRUCTORS":
      return (state = instructors);
    // Loading Only The Active Instructors Data
    case "LOAD_ACTIVE_INSTRUCTORS":
      return (state = instructors.filter(
        (instructor) => instructor.status === "ACTIVE"
      ));
    // Loading only The Bussy Instructors Data
    case "LOAD_BUSSY_INSTRUCTORS":
      return (state = instructors.filter(
        (instructor) => instructor.status === "BUSSY"
      ));
    // Loading Only The Data For The Unavailable Instructors
    case "LOAD_UNAVAILABLE_INSTRUCTORS":
      return (state = instructors.filter(
        (instructor) => instructor.status === "UNAVAILABLE"
      ));
    // Shuffling The Status For Each Instructor
    case "REFRESH_INSTRUCTORS":
      return (state = refreshInstructors(state));
    // The Default Return
    default:
      return state;
  }
}
