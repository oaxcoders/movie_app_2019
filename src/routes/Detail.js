import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  let location = useLocation();
  console.log(location);
  return <span>Hello</span>;
}
export default Detail;
