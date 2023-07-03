import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  if (location.state) {
    const { title } = location.state;
    return (
      <>
        <h1>
          {title}
          <br />
          <span> year: {location.state.year}</span>
        </h1>
        <img src={location.state.poster} alt={title} />
        <p>{location.state.summary}</p>
      </>
    );
  }
}
export default Detail;
