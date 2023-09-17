import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/company.css";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";
import "../styles/compreview.css";
const Reviews = () => {
  const state = useLocation();
  const [reviews, setReviews] = useState([]);
  const [entry, setEntry] = useState("");
  const sendPost = (e) => {
    e.preventDefault();
    setReviews([...reviews, entry]);
  };
  const onChange = (e) => {
    setEntry(e.target.value);
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
      <div className="reviewbox">
        <div className="reviews">
          <div className="reviewContainer">
            <div className="review">
              <FontAwesomeIcon icon={faPenToSquare} />
              <form>
                <input
                  type="text"
                  placeholder="Write a review"
                  onChange={onChange}
                ></input>
                <button type="submit" onClick={sendPost}>
                  Send
                </button>
              </form>
            </div>
          </div>
          {reviews.map((review) => (
            <Review
              name="Mathilda Foster"
              role="UX Designer"
              message="lorem ipsum dolor"
            />
          ))}
          <Review
            name="Mathilda Foster"
            role="UX Designer"
            message="lorem ipsum dolor"
          />
          <Review
            name="Mathilda Foster"
            role="UX Designer"
            message="lorem ipsum dolor"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
