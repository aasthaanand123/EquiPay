import React from "react";
import { useLocation } from "react-router";
import "../styles/company.css";
function Company() {
  const state = useLocation();
  console.log(state);
  return (
    <div className="comp">
      <h2>{state.state.company}</h2>
    </div>
  );
}

export default Company;
