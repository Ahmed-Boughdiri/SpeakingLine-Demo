// Interface For The Actions Returns Types
// Each Action Need To Return a Type and Optionaly a Payload

interface ActionProps {
  type: String;
  payload?: any;
}

// Load Instructors Action

export function loadInstructors(): ActionProps {
  return {
    type: "LOAD_INSTRUCTORS",
  };
}

// Load Active Instructors Action

export function loadActiveInstructors(): ActionProps {
  return {
    type: "LOAD_ACTIVE_INSTRUCTORS",
  };
}

// Load Bussy Instructors Action

export function loadBussyInstructors(): ActionProps {
  return {
    type: "LOAD_BUSSY_INSTRUCTORS",
  };
}

// Load Unavailable Instructors Action

export function loadUnavailableInstructors(): ActionProps {
  return {
    type: "LOAD_UNAVAILABLE_INSTRUCTORS",
  };
}

// Refresh Instructors Data Action

export function refreshInstructorsData(): ActionProps {
  return {
    type: "REFRESH_INSTRUCTOR",
  };
}
