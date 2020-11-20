// Importing The Thumbnails Of The Instructors

import Irina from "../assets/Irina.png";
import Melissa from "../assets/Melissa.png";
import Douglas from "../assets/Douglas.png";
import Debbie from "../assets/Debbie.png";
import John from "../assets/John.png";
import Brenda from "../assets/Brenda.png";
import Ivan from "../assets/Ivan.png";
import Michale from "../assets/Michale.png";

// The Instructor Props Type

export interface InstructorProps {
  name: String;
  rating: Number;
  availableMinutes: Number | undefined;
  spokenLanguages: String[];
  specialization: String[];
  status: String;
  thumb: String;
}

// The Instructors Data

export const instructors: InstructorProps[] = [
  {
    name: "Irina O.",
    rating: 4.5,
    availableMinutes: 6,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "ACTIVE",
    thumb: Irina,
  },
  {
    name: "Melissa H.",
    rating: 4.5,
    availableMinutes: undefined,
    spokenLanguages: ["İngilizce", "Rusça"],
    specialization: ["Kids Lesson", "Grammer"],
    status: "ACTIVE",
    thumb: Melissa,
  },
  {
    name: "Douglas M.",
    rating: 4.5,
    availableMinutes: 19,
    spokenLanguages: ["İngilizce", "Türkçe"],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
    ],
    status: "ACTIVE",
    thumb: Douglas,
  },
  {
    name: "Debbie S.",
    rating: 4.5,
    availableMinutes: 24,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "BUSSY",
    thumb: Debbie,
  },
  {
    name: "John Malachi O.",
    rating: 4.5,
    availableMinutes: 13,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "BUSSY",
    thumb: John,
  },
  {
    name: "Brenda B.",
    rating: 4.5,
    availableMinutes: undefined,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "BUSSY",
    thumb: Brenda,
  },
  {
    name: "Ivan G.",
    rating: 4.5,
    availableMinutes: undefined,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "UNAVAILABLE",
    thumb: Ivan,
  },
  {
    name: "Michale K.",
    rating: 4.5,
    availableMinutes: undefined,
    spokenLanguages: [
      "İngilizce",
      "İspanyolca",
      "İtalyanca",
      "Almanca",
      "Rusça",
      "Türkçe",
    ],
    specialization: [
      "Conversation Practice",
      "Kids Lesson",
      "TOEFL Preparation",
      "Grammer",
      "IELTS Preparation",
    ],
    status: "UNAVAILABLE",
    thumb: Michale,
  },
];
