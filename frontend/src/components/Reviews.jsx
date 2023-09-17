import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/company.css";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
const Reviews = () => {
  const state = useLocation();
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
    </div>
  );
};

export default Reviews;
