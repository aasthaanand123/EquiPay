import React, { useState } from "react";
import "../styles/salary.css";
import Company from "./Company";
import { Link } from "react-router-dom";
import { softwareCompanies } from "./companies";
function Salary() {
  const [query, setQuery] = useState("");
  return (
    <div className="salaryInfo">
      <h2>Search for a company</h2>
      <input
        placeholder="Search"
        className="Search"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="companies">
        {softwareCompanies
          .filter((company) => company.toLowerCase().includes(query))
          .map((company) => {
            return (
              <div className="company" key={softwareCompanies.indexOf(company)}>
                <Link
                  to="/company"
                  state={{ company: company }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>{company}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Salary;
