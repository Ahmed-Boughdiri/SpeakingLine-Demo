import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import StatusBar from "../components/StatusBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Instructors from "../components/Instructors";
import Footer from "../components/Footer";

// The Eğitmenler Page

const Eğitmenler = () => {
  // Controles The Update Of The Animation (When The Animation Starts)
  const [startAnimation, setStartAnimation] = useState(true);
  const loadAnimation = () => {
    setStartAnimation(false);
    setTimeout(() => {
      setStartAnimation(true);
    }, 50);
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <StatusBar loadAnimation={loadAnimation} />
      <Instructors
        startAnimation={startAnimation}
        loadAnimation={loadAnimation}
      />
      <Footer />
    </>
  );
};

export default Eğitmenler;
