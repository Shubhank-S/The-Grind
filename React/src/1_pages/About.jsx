import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function About() {
  const data = useLocation();

  return (
    <>
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
      </div>
      <h1>About</h1>
    </>
  );
}

export default About;
