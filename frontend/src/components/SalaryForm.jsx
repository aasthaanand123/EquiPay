import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/company.css";
import "../styles/postSalary.css";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Currency } from "./currency";
const SalaryForm = () => {
  const [values, setValues] = useState({
    "base-pay": 0,
    currency: 0,
    yoe: 0,
    yoec: 0,
    emp: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const state = useLocation();
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comp">
      <div className="comp-nav">
        <button>
          <Link
            to="/company/charts"
            state={{ company: state.state.company }}
            style={{ textDecoration: "none", color: "black" }}
          >
            Charts <InsightsOutlinedIcon />
          </Link>
        </button>
        <button>
          <Link
            to="/company/reviews"
            state={{ company: state.state.company }}
            style={{ textDecoration: "none", color: "black" }}
          >
            Reviews <ReviewsOutlinedIcon />
          </Link>
        </button>
        <button>
          <Link
            to="/company/postSalary"
            state={{ company: state.state.company }}
            style={{ textDecoration: "none", color: "black" }}
          >
            Post salary <RequestQuoteOutlinedIcon />
          </Link>
        </button>
      </div>
      <h2>{state.state.company}</h2>
      <div className="salary-notice">
        <p>
          {" "}
          <ErrorOutlineOutlinedIcon style={{ paddingRight: "20px" }} />
          Have you worked at {state.state.company} before? Or are you an
          employee at {state.state.company}. You can post the salary you
          earn/earned at this company! This will help us gather data that helps
          the community better understand distribution of pay among different
          genders. Your post will be anonymous.{" "}
        </p>
      </div>
      <div className="sal-form">
        <form onSubmit={handleForm}>
          <div className="sal-field">
            <label>Base Pay Per Year:</label> <br></br>
            <input
              type="number"
              placeholder="Enter base pay"
              name="base-pay"
              onChange={onChange}
            ></input>
          </div>
          <div className="sal-field">
            <label>Currency:</label> <br />
            <select name="currency" onChange={onChange}>
              {Currency.map((curr) => {
                return (
                  <option value={curr.code}>
                    {curr.name + " (" + curr.code + ")"}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sal-field">
            <label name="yoe">Total years of experience in this field</label>{" "}
            <br />
            <input
              type="number"
              placeholder="e.g. 2"
              name="yoe"
              onChange={onChange}
            ></input>
          </div>
          <div className="sal-field">
            <label name="yoec">
              Years of experience at {state.state.company}
            </label>{" "}
            <br />
            <input
              type="number"
              placeholder="e.g. 2"
              name="yoec"
              onChange={onChange}
            ></input>
          </div>
          <div className="sal-field">
            <label name="emp">Are you a current or former employee?</label>{" "}
            <br />
            <input
              type="radio"
              name="emp"
              value="current"
              onChange={onChange}
            />
            <label htmlFor="current">Current</label>
            <input type="radio" name="emp" value="former" onChange={onChange} />
            <label htmlFor="former">Former</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SalaryForm;
