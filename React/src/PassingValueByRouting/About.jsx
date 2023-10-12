import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const data = useLocation();

  return (
    <>
      <h1>About</h1>
      <h1>{data.name}</h1>
    </>
  );
}

export default About;
