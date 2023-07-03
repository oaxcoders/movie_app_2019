import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  let location = useLocation();
  console.log(location);
  return <span>About this page: i bilid it be</span>;
}

export default About;
