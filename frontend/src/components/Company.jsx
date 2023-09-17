import React, { useState } from "react";
import { useLocation } from "react-router";
import "../styles/company.css";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { Link } from "react-router-dom";
function Company() {
  const state = useLocation();
  console.log(state);
  return (
    <div className="comp">
      <div className="comp-nav">
        <button>
          <Link to="/company/charts">
            Charts <InsightsOutlinedIcon />
          </Link>
        </button>
        <button>
          <Link to="/company/reviews">
            Reviews <ReviewsOutlinedIcon />
          </Link>
        </button>
        <button>
          <Link to="/company/postSalary">
            Post salary <RequestQuoteOutlinedIcon />
          </Link>
        </button>
      </div>
      <h2>{state.state.company}</h2>
    </div>
  );
}

export default Company;
