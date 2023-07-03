import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        {location.state.title}
        <br />
        <span> year: {location.state.year}</span>
      </h1>
      <img src={location.state.poster} alt={location.state.title} />
      <p>{location.state.summary}</p>
    </>
  );
}
export default Detail;
